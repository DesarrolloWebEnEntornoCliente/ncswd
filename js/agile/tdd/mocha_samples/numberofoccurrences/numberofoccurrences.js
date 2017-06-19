exports.numberOfOccurrences = function (string, subString) {
    var stringIndex = 0;
    var stringChar;
    var subStringIndex;
    var subStringChar;
    var occurrences = 0;
    do {
        subStringIndex = 0;
        stringChar = string[stringIndex];
        subStringChar = subString[subStringIndex];
        while (stringChar && subStringChar && (stringChar === subStringChar)) {
            stringIndex = stringIndex + (subStringChar ? 1 : 0);
            subStringIndex = subStringIndex + 1;
            stringChar = string[stringIndex];
            subStringChar = subString[subStringIndex];
        }
        if (subString && !subStringChar) {
            occurrences = occurrences + 1;
        } else {
            stringIndex = stringIndex + 1;
        }
    } while (stringChar);
    return occurrences;
};
