var wsUri = "ws://localhost:8080/";
//var wsUri = "ws://echo.websocket.org/";

// DOM Helpers
function $(id) {
    return document.getElementById(id);
}

function create(type, inner) {
    var elem = document.createElement("p")
    elem.innerHTML = inner;
    return elem;
}

// Helpers
function writeToScreen(message) {
    var pre = create("p", message);
    pre.style.wordWrap = "break-word";
    $("output").appendChild(pre);
}

function doWebSocket() {
    websocket = new WebSocket(wsUri, "echo-protocol")
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt) {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
}

function onClose(evt) {
    writeToScreen("DISCONNECTED");
}

function onMessage(evt) {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    websocket.close();
}

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message) {
    writeToScreen("SENT: " + message);
    websocket.send(message);
}

function init() {
    if (window.WebSocket) {
        doWebSocket();
    } else {
        writeToScreen("Your browser doesn't support WebSocket");
    }
}

window.addEventListener("load", init, false);
