(function (module) {
    // The histogram functions below admits a string as argument
    // and evaluates to a mapping between each caracter in the
    // string and its absolute frequency
    // It ships in five flavours:

    // Iterative version
    function histogramIter(chars) {
        var result = {},
            charsLehgth = chars.length,
            currentChar,
            currentCharPos,
            currentCharFreq;
        for (currentCharPos = 0; currentCharPos < charsLehgth; currentCharPos++) {
            currentChar = chars[currentCharPos];
            currentCharFreq = result[currentChar];
            result[currentChar] = currentCharFreq ? currentCharFreq + 1 : 1;
        }
        return result;
    }

    // Array version
    function histogramArr(sentence, separator, mark) {
        mark = mark || '*';
        var orderedChars = sentence.replace(/\s/g,"").toUpperCase().split("").sort();
        var previousChar = "";
        var histogram = "";
        separator = separator || '|';
        separator = separator || '|';
        for (currentChar of orderedChars) {
            histogram += (currentChar === previousChar)
                ? mark 
                : `${separator}${currentChar}: ${mark}`;
            previousChar = currentChar;
        }
        return histogram;
    }

    // Recursive version
    function histogramRec(chars) {
        return {"TODO": 1};
    }

    // Tail recursive version
    function histogramTailRec(chars) {
        function histo_acc(chars, acc) {
            var result,
                car;
            if (!chars) {
                result = acc;
            } else {
                car = chars[0];
                acc[car] = acc[car] ? acc[car] + 1 : 1;
                result = histo_acc(chars.slice(1), acc);
            }
            return result;
        }
        return histo_acc(chars, {});
    }

    // Functional version
    function histogramFunc(chars) {
        function acc(prev, curr) {
            var currentCharFreq = prev[curr];
            prev[curr] = currentCharFreq ? currentCharFreq + 1 : 1;
            return prev;
        }
        var result = chars.split("");
        return result.reduce(acc, {});
    }

    // Helpers
    function repeat(char, number) {
        return (new Array(number + 1)).join(char);
    }

    function barText(prefix, separator, suffix, barMark, char) {
        var barMark = barMark || "*",
            frequency = this[char],
            bar = repeat(barMark, frequency),
            result = prefix;
        result += [char, bar, frequency].join(separator);
        return result + suffix;
    }

    function histogramText(data, header, footer, prefix, separator, suffix, barMark) {
        var func = aBar.bind(data, prefix, separator, suffix, barMark),
            chars = Object.keys(data).sort();
            return header +  chars.map(func).join("") + footer;
    }
}(this));
