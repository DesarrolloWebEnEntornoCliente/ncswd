"use strict";

// Dependencies
var __ = require("underscore");
var path = require("path");
var fs = require("fs");
var http = require("http");
var url = require("url");
var websocket = require("websocket");

const STATICHTMLDIR = "public";
const HTTPCODES = {
    OK: 200,
    NOTFOUND: 404,
    SERVERERROR: 500,
};
const INDEXFILE = "index.html";
const CONTENTTYPES = {
    textHTML: { "Content-Type": "text/html" },
    textPlain: {'Content-Type': 'text/plain'},
    appJSON: {'Content-Type': 'application/json'},
}
const CONTENTTYPEHEADERS = __.object(__.map(CONTENTTYPES, (value, key) =>
    [key, { "Content-Type": value} ]
));

// Global variables
const COLORS = [ "red", "green", "blue", "magenta", "purple", "plum", "orange" ]
    .sort((a,b) => Math.random() > 0.5);
// latest messages
var history = [];
// list of currently connected users
var clients = [];

// Helper function for escaping input strings
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function replaceHTMLEntities(str) {
}

process.title = 'node-ws-chat';

var server = {
    httpPort: parseInt(process.argv[2], 10) || 8080,
    chatServer: null,
    chatPort: parseInt(process.argv[3], 10) || 1337,
};

// HTTP Server
http.createServer(function(request, response) {
    var textContent = CONTENTTYPES.textHTML,
        sendResponse = function (code, body, headers, encoding) {
        headers = headers || textContent;
        encoding = encoding || "utf-8";
        response.writeHead(code, headers);
        response.write(body, encoding);
        response.end();
    };
    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), STATICHTMLDIR, uri);

    fs.exists(filename, function(exists) {
        if (!exists) {
            sendResponse(HTTPCODES.NOTFOUND, http.STATUS_CODES[HTTPCODES.NOTFOUND],
                textContent);
            return;
        }

        if (fs.statSync(filename).isDirectory()) {
            filename += path.join(INDEXFILE);
        }

        fs.readFile(filename, "binary", function(err, file) {
            if (err) {
                sendResponse(HTTPCODES.SERVERERROR, err, textContent);
            } else {
                sendResponse(HTTPCODES.OK, file);
            }
        });
    });
}).listen(server.httpPort);

console.log((new Date()) + " HTTP server is listening on port " + server.httpPort);

// Chat Server
server.chatServer = new websocket.server ({
    // http://tools.ietf.org/html/rfc6455#page-6
    httpServer: http.createServer(function(request, response) {
        console.log((new Date()) + ' HTTP server. URL' + request.url + ' requested.');

        if (request.url === '/status') {
            response.writeHead(200, CONTENTTYPES.appJSON);
            var responseObject = {
                currentClients: clients.length,
                totalHistory: history.length
            }
            response.end(JSON.stringify(responseObject));
        } else {
            response.writeHead(404, CONTENTTYPES.textPlain);
            response.end('Not Found');
        }
    }).listen(server.chatPort)
});

console.log((new Date()) + " Chat server is listening on port " + server.chatPort);

// Event on Websocket request
server.chatServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

    // accept connection - you should check 'request.origin' to make sure that
    // client is connecting from your website
    // (http://en.wikipedia.org/wiki/Same_origin_policy)
    var connection = request.accept(null, request.origin);
    // we need to know client index to remove them on 'close' event
    var index = clients.push(connection) - 1;
    var userName = false;
    var userColor = false;

    console.log((new Date()) + ' Connection accepted.');

    // send back chat history
    if (history.length > 0) {
        connection.sendUTF(JSON.stringify( { type: 'history', data: history } ));
    }

    // user sent some message
    connection.on('message', function(message) {
        if (message.type === 'utf8') { // accept only text
            if (userName === false) {
                // first message sent by user is their name
                // remember user name
                userName = htmlEntities(message.utf8Data);
                // get random color and send it back to the user
                userColor = COLORS.shift();
                connection.sendUTF(JSON.stringify({ type:'color', data: userColor }));
                console.log((new Date()) + ' User is known as: ' + userName +
                    ' with ' + userColor + ' color.');
            } else {
                // log and broadcast the message
                console.log((new Date()) + ' Received Message from '
                    + userName + ': ' + message.utf8Data);
                // we want to keep history of all sent messages
                var obj = {
                    time: (new Date()).getTime(),
                    text: htmlEntities(message.utf8Data),
                    author: userName,
                    color: userColor
                };
                history.push(obj);
                history = history.slice(-100);

                // broadcast message to all connected clients
                var json = JSON.stringify({ type:'message', data: obj });
                for (var i=0; i < clients.length; i++) {
                    clients[i].sendUTF(json);
                }
            }
        }
    });

    // Disconnection
    connection.on('close', function(connection) {
        if (userName !== false && userColor !== false) {
            console.log((new Date()) + " Peer "    + connection.remoteAddress + " disconnected.");
            // remove user from the list of connected clients
            clients.splice(index, 1);
            // push back user's color to be reused by another user
            COLORS.push(userColor);
        }
    });
});
