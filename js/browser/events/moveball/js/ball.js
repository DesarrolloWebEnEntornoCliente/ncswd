var $ = document.getElementById.bind(document);
var dragged = false;
var ball = $("ball");
var pos = $("pos");
function pixels(n) {
    return n + "px";
}
function moveit(event) {
    ball.style.top = pixels(event.pageY -10);
    ball.style.left = pixels(event.pageX -10);
    pos.innerHTML = ball.style.left + " - " + ball.style.top;
}
ball.addEventListener("mousedown", function(event) {
    if (event.which == 1) {
        dragged = true;
        this.addEventListener("mousemove", moveit);
        event.preventDefault();
    }
});

ball.addEventListener("mouseup", function(event) {
    this.removeEventListener("mousemove", moveit);
});

window.addEventListener("mouseup", function(event) {
    ball.removeEventListener("mousemove", moveit);
});

