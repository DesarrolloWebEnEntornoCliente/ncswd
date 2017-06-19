// Modules, libraries and functions involved
var globals,
    moduletotest,
    somefunc,
    chai;

// Setup of modules, assertion library and functions to test
if (typeof require !== "undefined") {
    // Tests are being run out of the browser
    // We assume node.js as the execution environment
    globals = require("../js/globals.js");
    moduletotest = require("../js/somefuncs.js");
    chai = require("chai");
    somefunc = moduletotest.somefunc;
} else {
    // Tests are being run inside the browser
    somefunc = somefuncs.somefunc;
}

// BDD
chai.should();
var expect = chai.expect;

// The tests!
describe('Test somefunc', function() {
    context('Invalid arguments', function() {
        it('should throw an exception when a number is given', function() {
            var badArgsFn = somefunc.bind(null, 3);
            badArgsFn.should.throw(Error);
        });
    });
    context('Valid arguments', function() {
        it('should evaluate to true for test value', function() {
            somefunc(globals.AVALUE).should.be.ok;
        });
        it('should evaluate to false for other value', function() {
            somefunc("Other value").should.be.not.ok;
        });
    });
});
