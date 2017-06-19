(function (exports) {
    var globals;
    if (typeof require !== "undefined") {
        globals = require("./globals.js");
    } else {
        globals = window.globals;
    }

    function error(msg) {
        throw Error(msg);
    }

    exports.somefunc = function (something) {
        isNaN(something) || error("Numbers are not welcome");
        return something === globals.AVALUE;
    }
})(typeof exports === 'undefined' ? this.somefuncs = {} : exports);
