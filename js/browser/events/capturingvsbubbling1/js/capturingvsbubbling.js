var outer = document.getElementById("outer");
var inner = document.getElementById("inner");
var note = document.getElementById("note");

window.addEventListener("click", function (event) {
    note.innerHTML += "Window";
}, true);

document.addEventListener("click", function (event) {
    note.innerHTML += "Document";
}, true);

outer.addEventListener("click", function (event) {
    note.innerHTML += "Outer";
}, true);

inner.addEventListener("click", function (event) {
    note.innerHTML += "Inner";
}, true);
