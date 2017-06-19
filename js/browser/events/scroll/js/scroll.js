// This is a JavaScript Program

var bar = document.querySelector(".progress div");

addEventListener("load", function(event) {
    this;
});
addEventListener("scroll", function(event) {
    var max = document.body.scrollHeight - innerHeight;
    var percent = (pageYOffset / max) * 100;
    bar.style.width = percent + "%";
});
