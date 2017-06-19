var histogram = require("./histogram.js");

function showHistogramAsText(chars, calcFunc) {
    var data = calcFunc.call(this, chars);
    console.log(calcFunc.name);
    console.log(anHistogram(data, "----------", "----------", "|", "|", "\n"));
}

showHistogramAsText("Hola", histogram.histogramTailRec);


