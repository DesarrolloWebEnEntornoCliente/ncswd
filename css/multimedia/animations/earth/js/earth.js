"use strict";

var NUMBEROFFRAMES = 44,
    SIZEOFFRAME = 300,
    MSBETWEENFRAMES = 200;

var earthstyle,
    tempo;

// Helpers
function $(id) {
    return window.document.getElementById(id);
}

function topixels(dimension) {
    return dimension + "px";
}

function refresh(inc) {
    var horizontal, vertical;
    var nextframe = earthstyle.currentframe + inc;

    earthstyle.currentframe = (nextframe < 0 ? NUMBEROFFRAMES - 1 : nextframe) % NUMBEROFFRAMES;
    horizontal = - (earthstyle.currentframe % 6) * SIZEOFFRAME;
    vertical = - Math.floor(earthstyle.currentframe / 6) * SIZEOFFRAME;
    earthstyle.backgroundPosition = topixels(horizontal) + " " + topixels(vertical);
    $("info").innerHTML = "Frame: " + earthstyle.currentframe + "(" + earthstyle.backgroundPosition + ")";
}

function buildControls(controls, actions) {
    var controlsymbols = Object.keys(actions);
    controlsymbols.forEach(function(symbol) {
        var button = document.createElement("button");
        button.innerHTML = symbol; 
        button.onclick = actions[symbol];
        controls.appendChild(button);
    });
}

// Player functions
function start() {
    earthstyle.currentframe = earthstyle.currentframe || 0;
    pause();
    tempo = setInterval(next, MSBETWEENFRAMES);
}

function previous() {
    refresh(-1);
}

function next() {
    refresh(1);
}

function pause() {
    tempo = tempo ? clearInterval(tempo) : tempo;
}

var actions = {
    ">": start, 
    "<-": previous, 
    "->": next, 
    "||": pause,
}; 

function main() {
    earthstyle = $("earth").style;
    earthstyle.backgroundImage = "url('img/earth.png')";
    earthstyle.height = topixels(SIZEOFFRAME);
    earthstyle.width = earthstyle.height;
    buildControls($("controls"), actions);
    start();
}

window.onload = main;
