/*jslint
    node: true, browser: true */
/*global
    taxes: true, app: true */
"use strict";
var taxes = require("./taxes.js");
var app = {
    $: function (id) {
        return document.getElementById(id);
    },
    perfomCalculation: function () {
        var form = this.parentElement,
            price = form.price.value || form.price.placeholder,
            tax = form.tax.value;
        app.$("result").innerHTML = taxes.calculateTax(tax, price);
    },
    main: function () {
        app.$("btncal").onclick = app.perfomCalculation;
    }
};
window.onload = app.main;
