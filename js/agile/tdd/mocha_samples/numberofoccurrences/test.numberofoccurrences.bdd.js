/*jslint
    devel : true */
/*global
    chai, describe, it, numberOfOccurrences */
var chai = require("chai");
var noo = require("./numberofoccurrences.js");
var should = chai.should();
var numberOfOccurrences = noo.numberOfOccurrences;
describe("Testing numberOfOccurrences", function() {
    it("Should return 0 for empty string and empty substring", function() {
        numberOfOccurrences("", "").should.be.equal(0);
    });
    it("Should return 0 for empty string", function() {
        numberOfOccurrences("", "test").should.be.equal(0);
    });
    it("Should return 0 for empty substring", function() {
        numberOfOccurrences("This is a test", "").should.be.equal(0);
    });
    it("Should return 2 for one occurrence at the beginning and other at the end", function() {
        numberOfOccurrences("no por mucho madrugar amanece más temprano", "no").should.be.equal(2);
    });
    it("Should return three for three ocurrences including non ASCII characters", function() {
        numberOfOccurrences("árbol, buen árbol, que tras la borrasca te erguiste, árbol robusto, ceñido", "árbol").should.be.equal(3);
    });
    it("Should return 0 for substring longer than string", function() {
        numberOfOccurrences("This is a sentence", "This is a sentence with more characters").should.be.equal(0);
    });
    it("Should return 10 for substring being a single char repeated 10 times in the string", function() {
        numberOfOccurrences("aaaaaaaaaa", "a").should.be.equal(10);
    });
    it("Should return 3 for a substring repeated 3 times one after the other and one extra at the end", function() {
        numberOfOccurrences("the dadada mobda", "da").should.be.equal(4);
    });
    it("Should return 0 for substring of one character less than string", function() {
        numberOfOccurrences("Another sentence", "nother sentence").should.be.equal(1);
    });
});
