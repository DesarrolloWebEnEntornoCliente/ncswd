// This is a JavaScript Program

var help = document.querySelector("#help");
var fields = document.querySelectorAll("input");
for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener("focus", function(event) {
        var text = event.target.getAttribute("data-help");
        help.textContent = text;
    });
    fields[i].addEventListener("blur", function(event) {
        help.textContent = "";
    });
}
addEventListener("focus", function(event) {
    alert(1);
})
addEventListener("blur", function(event) {
    alert(2);
})
