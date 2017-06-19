var divs = document.getElementsByTagName("div");
var logzone = document.getElementById("log");
var i;

function log(msg) {
    var zone = document.createElement("p");
    zone.innerHTML = msg;
    logzone.appendChild(zone);
}

function capture() {
    log("capture: " + this.firstChild.nodeValue.trim());
}

function bubble() {
    log("bubble: " + this.firstChild.nodeValue.trim());
}

Array.from(divs).forEach(function(div) {
    div.addEventListener("click", capture, true);
    div.addEventListener("click", bubble, false);
});

