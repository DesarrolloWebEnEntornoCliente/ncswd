var calc = require("../js/calc.js");
// Test data
var validTestData = {
    firstoperand: "3",
    secondoperand: "3"
};
var invalidTestData = {
    firstoperand: "Bad",
    secondoperand: "3"
};
// The tests
casper.test.begin("Tests addition", 6, function(test) {
    casper.start('index.html', function() {
        // Wait for the form to be loaded
        this.waitForSelector("form input[name='firstoperand']");
    });
    casper.then(function() {
        // Fill in valid operands, check for them  and click the button
        this.fill("form[name='calculator']", validTestData, false);
        test.assertField("firstoperand", "3");
        test.assertField("secondoperand", "3");
        this.click("form button");
    });
    casper.then(function() {
        // Check that the result is OK
        test.assertSelectorHasText("#result", "6");
    });
    casper.then(function() {
        // Fill in invalid operands, check for them  and click the button
        this.fill("form[name='calculator']", invalidTestData, false);
        test.assertField("firstoperand", "Bad");
        test.assertField("secondoperand", "3");
        this.click("form button");
    });
    casper.then(function() {
        // Check that the result is OK
        test.assertSelectorHasText("#result", calc.ERROR_MSG);
    });
    casper.run(function() {
        test.done();
    });
});
