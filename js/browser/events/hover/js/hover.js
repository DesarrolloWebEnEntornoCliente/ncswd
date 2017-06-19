// This is a JavaScript Program

var para = document.querySelector("p");

function isInside(node, target) {
    for (; node != null; node = node.parentNode)
        if (node == target) return true;
}

para.addEventListener("mouseover", function(event) {
    if (!isInside(event.relatedTarget, para)) {
        para.style.color = "red";
    }
});

para.addEventListener("mouseout", function(event) {
    if (!isInside(event.relatedTarget, para)) {
        para.style.color = "";
    }
});
