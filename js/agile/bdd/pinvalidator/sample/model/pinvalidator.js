"use strict";
module.exports = {
    create: function () {
        var MSGS = {
            INVALID_PIN: "Invalid PIN",
            VALID_PIN: "Valid PIN"
        };
        var currentUser;
        var currentPIN;
        var PINOK;
        return {
            enter: function (name) {
                currentUser = name;
            },
            getCurrentUser: function () {
                return currentUser;
            },
            welcome: function () {
                return `Hello ${currentUser}`;
            },
            pin: function (pin) {
                currentPIN = pin;
            },
            validate: function() {
                PINOK = (currentPIN.length === 4) &&
                    currentPIN.split("").reverse().every(
                        function (x, i) {
                            return (x % 2) === ((i + 1) % 2);
                        });
            },
            result: function() {
                return PINOK
                    ? MSGS.VALID_PIN
                    : MSGS.INVALID_PIN;
            }
        };
    }
};
