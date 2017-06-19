"use strict";

var chai = require("chai");
var join = require("path").join;
var {defineSupportCode} = require("cucumber");

var PINValidator = require(join(process.cwd(), "impl", "model", "pinvalidator.js"));
var myPINValidator = PINValidator.create();

chai.should();

defineSupportCode(function({Given, When, Then}) {
    Given('the PIN is {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
        myPINValidator.pin(stringInDoubleQuotes);
        callback(null);
    });
    When('I validate it', function (callback) {
        myPINValidator.validate();
        callback(null);
    });
    Then('{stringInDoubleQuotes} must be shown', function (stringInDoubleQuotes, callback) {
        myPINValidator.result().should.be.equal(stringInDoubleQuotes);
        callback(null);
    });
});
