// Toying with event handlers

var $ = document.getElementById.bind(document);

var image = $("img");
var box = $("box");
var button = $("but");
var section = $("section");
var para = $("para");
var parb = $("parb");
var parc = $("parc");
var div = $("al");
var draw = $("draw");

function clickOnImage(event) {
    alert("clickOnImage");
}

function clickOnBox(event) {
    //alert("clickOnBox");
}

function clickOnButton(event) {
    alert("clickOnButton");
}

//image.onclick = function(event) {
 //   alert("onclick method");
//}

box.onclick = function(event) {
    parc.innerHTML="";
}
box.onkeypress = function(event) {
    par.innerHTML = +par.innerHTML + 1;
}

button.onclick = function(event) {
    alert("onclick method");
}

image.addEventListener("click", function(event) {
    //this.width = 100;
});

box.addEventListener("keyup", function(event) {
    alert("Key Up");
});

but.addEventListener("click", function(event) {
    alert("Hola");
});

//section.addEventListener("click", function(event) {
    //alert("Soy section");
//});

div.addEventListener("click", function(event) {
    parc.innerHTML += "Click";
});

para.addEventListener("mousedown", function (event) {
    parc.innerHTML += "1";
});

para.addEventListener("mouseup", function (event) {
    parc.innerHTML += "2";
});
para.addEventListener("click", function (event) {
    parc.innerHTML += "3";
});
para.addEventListener("dblclick", function (event) {
    parc.innerHTML += "4";
});
parb.addEventListener("mousedown", function (event) {
    parc.innerHTML += "5";
});

parb.addEventListener("mouseup", function (event) {
    parc.innerHTML += "6";
});
parb.addEventListener("click", function (event) {
    parc.innerHTML += "7";
});
parb.addEventListener("dblclick", function (event) {
    parc.innerHTML += "8";
});

draw.addEventListener("click", function (event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX) + "px";
    dot.style.top = (event.pageY) + "px";
    this.appendChild(dot);
});
