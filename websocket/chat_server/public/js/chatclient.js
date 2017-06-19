(function (url) {
    "use strict";
    const introKeyCode = 13;
    const connectionTimeOut = 5000;
    const MSGS = {
        noWSMsg: "This browser does not support WebSockets",
        noWSConnMsg: "Sorry, but there\'s some problem with your connection or the server is down",
        noValidJSONMsg: "This JSON is invalid."
    };
    var content = $("#content");
    var info = $("#info");
    var input = $("#input");
    var nick;
    // Helpers
    function rpad0(number) {
        return (number < 10) && `0${number}` || number;
    }
    function writeMessage(nick, message, color, datetime) {
        var now = [ datetime.getHours(), datetime.getMinutes() ].map(rpad0).join(":");
        content.prepend("<p><span style='color: " + color + "'>" + nick + "</span> @ " +
            now + ": " + message + "</p>");
    }
    function doChat(url) {
        var connection = new WebSocket(url)
        connection.onopen = function () {
            // first we want users to enter their names
            input.removeAttr("disabled");
            info.text("Choose nick:");
        };
        connection.onerror = function (error) {
            // just in there were some problems with conenction...
            content.html($("<p>", { text: MSGS.noWSConnMsg } ));
        };
        var handleIncomingMsg = function (message) {
            // try to parse JSON message. Because we know that the server always returns
            // JSON this should work without any problem but we should make sure that
            // the massage is not chunked or otherwise damaged.
            try {
                var json = JSON.parse(message.data);
            } catch (e) {
                console.log(MSGS.noValidJSONMsg, message.data);
                return;
            }

            // NOTE: if you"re not sure about the JSON structure
            // check the server source code above
            if (json.type === "color") {
                // first response from the server with user"s color
                info.text(nick + ": ").css("color", json.data);
                input.removeAttr("disabled").focus();
            } else {
                if (json.type === "history") { // entire message history
                    // insert every single message to the chat window
                    for (var i=0; i < json.data.length; i++) {
                        writeMessage(json.data[i].author, json.data[i].text,
                            json.data[i].color, new Date(json.data[i].time));
                    }
                } else {
                    if (json.type === "message") { // it"s a single message
                        input.removeAttr("disabled"); // let the user write another message
                        writeMessage(json.data.author, json.data.text,
                            json.data.color, new Date(json.data.time));
                    } else {
                        console.log(MSGS.noValidJSONMsg, json);
                    }
                }
            }
        };
        connection.onmessage = handleIncomingMsg;
        // Send message
        input.keydown(function(e) {
            var msg = $(this).val();
            if ((e.keyCode === introKeyCode) && msg) {
                // send the message as an ordinary text
                connection.send(msg);
                $(this).val("");
                // disable the input field to make the user wait until server
                // sends back response
                input.attr("disabled", "disabled");
                // we know that the first message sent from a user their name
                nick = nick || msg;
            }
        });
        // Alert the user if connection to server failed
        info.text("Connecting...");
        setInterval(function() {
            if (connection.readyState !== 1) {
                info.text("Error");
                input.attr("disabled", "disabled").val(MSGS.noWSConnMsg);
            }
        }, connectionTimeOut);
    }
    function invalidEnv() {
        content.html($("<p>", { text: MSGS.noWSMsg } ));
        input.hide();
        $("span").hide();
    }
    function init() {
        window.WebSocket && doChat(url) || invalidEnv();
    }
    init();
})("ws://127.0.0.1:1337");
