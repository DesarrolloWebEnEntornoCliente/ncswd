(function (exports) {
    var NIFLETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var NIELETTERS = 'XYZ';
    exports.encode_utf8 = function(string) {
        return unescape(encodeURIComponent(string));
    };

    exports.decode_utf8 = function(string) {
        return decodeURIComponent(escape(string));
    };

    exports.stringTest = function(string) {
        return string.split(" ").sort().reverse().join(" ").bold().italics().fontsize(25);
    };

    exports.palindrome = function(word) {
        const from = 'áéíóúü';
        const to = 'aeiouu';
        var pal, c, at, bt, i = 0, done = false;
        pal = word.toLowerCase();
        len = pal.length;
        while (!done) {
            at = pal.charAt(i);
            c = from.indexOf(at);
            at = (c < 0 ? at : to.charAt(c));
            bt = pal.charAt(len - i - 1);
            c = from.indexOf(bt);
            bt = (c < 0 ? bt : to.charAt(c));
            alert ("1. " + at + "2. " + bt);
            done = (at != bt) || i > len - i - 1;
            i++;
        }
    };

    exports.substr = function(string, subString) {
        var stringIndex = -1;
        var nextStringChar = string[0];
        var subStringIndex;
        var nextSubStringChar;
        var numberOfSubs = 0;
        while (nextStringChar) {
            subStringIndex = -1;
            do {
                stringIndex++;
                subStringIndex++;
                nextStringChar = string[stringIndex];
                nextSubStringChar = subString[subStringIndex];
            } while (nextStringChar && (nextSubStringChar == nextStringChar));
            if (!nextSubStringChar) {
                numberOfSubs++;
            }
        }
        return numberOfSubs;
    };

}(typeof exports === 'undefined' ? this['string'] = {} : exports));
