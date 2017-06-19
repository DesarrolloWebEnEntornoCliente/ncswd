var APP_DESCRIPTION = "Esta aplicación elimina los espacios duplicados de " +
        "una cadena de caracteres";
var ENTER_STRING_MESSAGE = "Introduzca la cadena de caracteres";
var RESULTING_STRING_MESSAGE = "La cadena resultante es: ";
var FIRST_MESSAGE = APP_DESCRIPTION + "\n" + ENTER_STRING_MESSAGE;
function trim(string) {
    var result = "";
    var spaceChar = " ";
    var currentIndex = 0;
    var currentChar;
    var padding = "";
    var firstWord = false;
    var nextChar;
    do {
        currentChar = string[currentIndex];
        currentIndex = currentIndex + 1;
        if (currentChar === spaceChar) {
            padding = " ";
        } else {
            if (currentChar && firstWord) {
                nextChar = padding + currentChar;
            } else {
                firstWord = true;
                nextChar = currentChar || "";
            }
            result = result + nextChar;
            padding = "";
        }
    } while (currentChar);
    return result;
}
