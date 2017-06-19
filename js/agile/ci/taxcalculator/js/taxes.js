/*jslint
    node : true
*/
module.exports.calculateTax = function (tax, price) {
    "use strict";
    return price * (tax / 100);
};
