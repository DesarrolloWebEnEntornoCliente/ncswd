var box = document.getElementById("box");
var thename = document.getElementById("thename");

box.addEventListener("keyup", function (event) {
    thename.innerHTML = this.value;
});
