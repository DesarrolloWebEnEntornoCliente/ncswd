(function (exports) {
    exports.toOctal = function (number) {
        var currentLength = currentDigit = convertedValue = 0;
        var hexa = decimal = other = false;
        var char;
        for ( ; number[currentLength] ; currentLength++);
        for ( ; !other || (currentDigit < currentLength) ; currentDigit++ ) {
            char = number[currentDigit];
            hexa = (char >= "a" && char <= "f") || (char >= "A" && char <= "F");
            decimal = ( char == "8" ) || ( char == "9" );
            octal = ( char >= "0" ) && ( char <= "7" );
            other = !(hexa || decimal || octal);
        }
        return other && NaN || convertedValue;
    };

    exports.toHexa = function(number) {
        var i = 0;
        while (number) {
            i += number % 10;
            number = parseInt(number / 10);
        }
    };
}(typeof exports === 'undefined' ? this['number'] = {} : exports));
