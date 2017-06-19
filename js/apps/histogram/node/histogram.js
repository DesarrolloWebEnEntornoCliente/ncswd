#!/usr/bin/env node

var DEFAULT_SEPARATOR = "|";
var DEFAULT_MARK = "*";
var histogramFuncs = (function() {
    var funcs = {
        histogramArray: function (sentence, separator, mark) {
            var orderedChars = sentence.replace(/\s/g,"").toUpperCase().split("").sort();
            var previousChar = "";
            var histogram = "";
            for (currentChar of orderedChars) {
                histogram += (currentChar === previousChar)
                    ? mark
                    : `${separator}${currentChar}: ${mark}`;
                previousChar = currentChar;
            }
            return histogram;
        },
        histogramFun: function (sentence, separator, mark) {
            // One liner functional code
            return sentence.replace(/\s/g, "").toLowerCase().split("").sort().reduce((x,y,i,a) => `${x}${(y === a[i - 1]) ? "" : "\n" + y + " "}*`, "");
        }
    };
    return {
        histogram: function (func, input, separator, mark) {
            var separator = separator || DEFAULT_SEPARATOR;
            var mark = mark || DEFAULT_MARK;
            return funcs["histogram" + func].bind(null, input, separator, mark);
        }
    };
}());
function main() {
    var input = process.argv.splice(2).join(" ");
    console.log(histogramFuncs.histogram("Array", input, "\n").call());
    console.log(histogramFuncs.histogram("Fun", input, "\n").call());
}
main();
