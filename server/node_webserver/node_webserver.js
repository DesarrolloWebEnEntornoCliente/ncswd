// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'node-web-server';
 
// HTTP codes
var httpCodes = {
    ok: 200,
    notFound: 404,
    serverError: 500,
};

// HTTP server stuff
var httpIndexFile = "index.html";

// Server parameters
var httpServerPort = parseInt(process.argv[2], 10) || 8080;
var htDocsDir = "htdocs";
 
// Needed modules
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require("fs");
 
// Global variables
// latest messages
var history = [];
// list of currently connected users
var clients = [];
 
// Helper function for escaping input strings
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
 
// HTTP Server
http.createServer(function(request, response) {
    var sendResponse = function (code, body, headers, encoding) {
        headers = headers || { "Content-Type": "text/html" };
        encoding = encoding || "utf-8";
        response.writeHead(code, headers);
        response.write(body, encoding);
        response.end();
        console.log((new Date()) + " Request: " + request.url + " from " +
                    request.connection.remoteAddress + ". Code: " + code);
    };
    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), htDocsDir, uri);
    
    fs.exists(filename, function(exists) {
        if (!exists) {
            sendResponse(httpCodes.notFound, http.STATUS_CODES[httpCodes.notFound],
                        { "Content-Type": "text/html" });
	    return;
        } else {
            if (fs.statSync(filename).isDirectory()) {
                filename += '/' + httpIndexFile;
            }    
            fs.readFile(filename, "binary", function(err, file) {
                if (err) {
                    sendResponse(httpCodes.serverError, err, { "Content-Type": "text/html" });
                } else {
                    sendResponse(httpCodes.ok, file);
                }
            });
        }
    });
}).listen(httpServerPort);

console.log((new Date()) + " HTTP server is listening on port " + httpServerPort);
 
