var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
chai.should();
var test = require("../function.js");

describe('Functional', function() {
    context('Complement', function() {
        var even = n => ! Boolean(n % 2);
        var odd = test.complement(even);

        var greaterThan10 = n => n > 10;
        var lessOrEqualThan10 = test.complement(greaterThan10);
        it('Odd', function() {
            assert.equal(odd(9), true);
        });
        it('Should evaluate to true for 10', function() {
            lessOrEqualThan10(10).should.be.ok;
        });
        it('Should evaluate to true for 3', function() {
            lessOrEqualThan10(3).should.be.ok;
        });
        it('Should evaluate to false for 11', function() {
            lessOrEqualThan10(11).should.be.nok;
        });
    });

    context('Composition', function() {
        var id = n => n;
        var minusOne = n => n - 1;
        var plusOne = n => n + 1;
        it('Should evaluate to 42 for a composition of id giving 42', function() {
            test.compose(id).call(this, 42).should.be.equal(42);
        });
        it('Should evaluate to 7 for a composition of id and minusOne giving 8', function() {
            test.compose(id, minusOne).call(this, 8).should.be.equal(7);
        });
        it('Should evaluate to 42 for a composition of id, minusOne, id, plusOne giving 42', function() {
            test.compose(id, minusOne, id, plusOne).call(this, 8).should.be.equal(8);
        });
    });
});
