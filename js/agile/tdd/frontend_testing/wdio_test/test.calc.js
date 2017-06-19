var calc = require("../js/calc.js");
var chai = require('chai');
chai.should();
// The tests
describe('The calculator', function() {
    before(function() {
        browser.url('http://localhost:4567');
        window = browser.window;

    });
    context('Correct values in operators', function() {
        it('should show 6 for 3 + 3', function() {
            browser.setValue('#firstoperand', '3');
            browser.setValue('#secondoperand', '3');
            browser.click('#add');
            browser.getText('#result').should.be.equal('6');
        });
    });
    context('Incorrect values in operators', function() {
        it('should show error for Bad + 3', function() {
            browser.setValue('#firstoperand', 'Bad');
            browser.setValue('#secondoperand', '3');
            browser.click('#add');
            browser.getText('#result').should.be.equal(calc.ERROR_MSG);
        });
    });
});
