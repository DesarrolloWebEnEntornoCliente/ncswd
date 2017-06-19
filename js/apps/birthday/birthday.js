/*jslint browser : true, devel : true
*/
var HAPPY_BIRTHDAY_MSG = "¡Feliz cumpleaños!";
var INCORRECT_DATE_MSG = "La fecha introducida es incorrecta";
var PROMPT_FOR_BIRTHDATE_MSG = "Introduzca su fecha de nacimiento en formato dd/mm/yyyy";
function buildDaysMessage(days) {
    return "Falta" + (days === 1 ? " un día" : "n " + days + " días") +
        " para su próximo cumpleaños";
}
function birthdayDays(date) {
    var now = new Date();
    var cyear = now.getFullYear();
    var msperday = 24 * 60 * 60 * 1000;
    var days;

    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    if (isNaN(date.getTime())) {
        days = -1;
    } else {
        date.setFullYear(cyear);
        if (now > date) {
            date.setFullYear(cyear + 1);
        }
        days = Math.round((date - now) / msperday);
    }
    return days;
}
function getMessage(days) {
    var message;
    if (!days) {
        message = HAPPY_BIRTHDAY_MSG;
    } else {
        if (days < 0) {
            message = INCORRECT_DATE_MSG;
        } else {
            message = buildDaysMessage(days);
        }
    }
    return message;
}
function main() {
    var date = prompt(PROMPT_FOR_BIRTHDATE_MSG).split("/");
    date = new Date (date[2], date[1] - 1, date[0]);
    var days = birthdayDays(date);

    document.write("<p>" + getMessage(days) + "</p>");
}
window.onload = main;
