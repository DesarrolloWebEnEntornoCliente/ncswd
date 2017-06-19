function isNodeEnv() {
    //This is how underscore detects if we are in node
   return (typeof module !== 'undefined') && (module.exports);
}
function HTMLPrinter(message) {
    document.write(message);
}
function textPrinter(message) {
    console.log(message);
}
function showHistogramAsTable(chars, calcFunc, printFunc) {
    var data = calcFunc.call(this, chars);
    printFunc.call("<h1>" + calcFunc.name + "</h1>");
    printFunc.call(anHistogram(data, "<table>", "</table>", "<tr><td>", "</td><td>", "</td></tr>"));
}
(function() {
    var chars = isNodeEnv()
        ? process.argv.splice(1).join(" ")
        : window.location.search.slice(1);
    console.log(chars);
    // Diferent algorithms and printing mode can be combined here
    //showHistogramAsTable(queryString, histogramIter);
    //showHistogramAsText(queryString, histogramTailRec);
    //showHistogramAsText(queryString, histogramTailRec);
}());
