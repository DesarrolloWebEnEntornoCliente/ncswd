var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
chai.should();
var test = require("../objects.js");

describe('Objects', function() {
    context('Inheritance', function() {
        it('should eat when is eating', function() {
            var myfish = new test.Fish("ACGTACG", "red");
            myfish.eat().should.be.equal(test.Animal.prototype.MSGS.animalIs("Eating"));
        });
        it('should sleep when is sleepin', function() {
            var myfish = new test.Fish("ACGTACG", "red");
            myfish.sleep().should.be.equal(test.Animal.prototype.MSGS.fishesDontSleep("red"));
        });
    });

    context('Closure Objet', function() {
        var obj = test.closureObject();
        it('Set property', function() {
            obj.setPrivateProperty("Test");
            assert.equal(obj.getPrivateProperty(), "Test");
        });
    });

    context('Static Objet', function() {
        var obj = test.staticObject(10);
        var f = obj();
        it('Static 11', function() {
            assert.equal(f(), 11);
        });
        it('Static 12', function() {
            assert.equal(f(), 12);
        });

        it('Static 11 again', function() {
            var f = obj();
            assert.equal(f(), 11);
        });
    });
});
