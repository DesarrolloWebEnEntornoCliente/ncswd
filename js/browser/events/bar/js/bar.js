// This is a JavaScript Program

var lastX; // Tracks the last observed mouse X position

var bar = document.getElementById("bar");

function moved(event) {
    if (event.which != 1) {
        removeEventListener("mousemove", moved);
    } else {
        var dist = event.pageX - lastX;
        bar.style.width = Math.max(10, bar.offsetWidth + dist) + "px";
        lastX = event.pageX;
    }
}
bar.addEventListener("mousedown", function(event) {
    if (event.which == 1) {
        lastX = event.pageX;
        this.addEventListener("mousemove", moved);
        event.preventDefault(); // Prevent selection
    }
});

