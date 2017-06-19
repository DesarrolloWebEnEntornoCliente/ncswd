/*jslint
    node: true, browser: true */
/*global
    taxes: true, app: true */
"use strict";
var taxes = require("./taxes.js");
var $ = document.getElementById.bind(document);
var app = {
    perfomCalculation: function () {
        var form = this.parentElement,
            price = form.price.value || form.price.placeholder,
            tax = form.tax.value;
        console.log("TRES");
        $("result").innerHTML = taxes.calculateTax(tax, price);
        console.log("CUATRO");
    },
    main: function () {
        console.log("UNO");
        $("btncal").onclick = app.perfomCalculation;
        console.log("DOS");
    }
};
window.onload = app.main;

