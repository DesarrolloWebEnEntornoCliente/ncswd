"use strict";

var chai = require("chai");
var join = require("path").join;
var {defineSupportCode} = require("cucumber");

var PINValidator = require(join(process.cwd(), "impl", "model", "pinvalidator.js"));
var myPINValidator;

chai.should();

defineSupportCode(function({Given, When, Then}) {
    Given('a PIN validator', function (callback) {
        myPINValidator = PINValidator.create();
        callback(null);
    });
    When('I enter {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
        myPINValidator.enter(stringInDoubleQuotes);
        callback(null);
    });
    Then('I should see {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
        stringInDoubleQuotes.should.be.equal(myPINValidator.welcome());
        callback(null);
    });
    Then('{stringInDoubleQuotes} is registered as current user', function (stringInDoubleQuotes, callback) {
        stringInDoubleQuotes.should.be.equal(myPINValidator.getCurrentUser());
        callback(null);
    });
});
