module.exports = (function() {
    var ERROR_MSG = "Error";
    return {
        ERROR_MSG: ERROR_MSG,
        add: function(firstoperand, secondoperand) {
            var result = +firstoperand + +secondoperand;
            return isNaN(result) && ERROR_MSG || result;
        }
    };
}());
