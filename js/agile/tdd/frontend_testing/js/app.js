var app = window.app || {};
app.calc = require("./calc.js");
app.doAdd = function() {
    var firstoperand = $('firstoperand');
    var secondoperand = $('secondoperand');
    $('result').innerHTML = window.app.calc.add(firstoperand.value, secondoperand.value);
};
window.app = app;
window.$ = function(id) {
    return document.getElementById(id);
};
window.main = function() {
    $("add").onclick = window.app.doAdd;
};
window.addEventListener('load', window.main);
