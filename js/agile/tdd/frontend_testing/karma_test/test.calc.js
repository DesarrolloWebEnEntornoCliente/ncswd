// Use html2js preprocessor to extrac body from page to test
var HTMLFile = __html__['index.html'],
    body = HTMLFile.split(RegExp("<body>|</body>"))[1];

// Load page and run code
document.body.innerHTML = body;
window.main();

// BDD
chai.should();

// The tests!
describe('Simple calculator', function() {
    context('Correct values in operators', function() {
        afterEach(function() {
            $('result').innerHTML = "";
        });
        it('should show 6 for 3 + 3', function() {
            $('firstoperand').value = 3;
            $('secondoperand').value = 3;
            $('add').click();
            $('result').innerHTML.should.be.equal("6");
        });
    });
    context('Incorrect values in operators', function() {
        afterEach(function() {
            $('result').innerHTML = "";
        });
        it('should show error for Bad + 3', function() {
            $('firstoperand').value = "Bad";
            $('secondoperand').value = 3;
            $('add').click();
            $('result').innerHTML.should.be.equal(app.calc.ERROR_MSG);
        });
    });
});
