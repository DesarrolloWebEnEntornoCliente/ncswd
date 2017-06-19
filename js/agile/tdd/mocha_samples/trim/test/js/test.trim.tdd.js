/*jslint
  devel : true browser: true */
/*global
    chai, suite, test, trim */
var assert = chai.assert;
var expect = chai.expect;

suite("Testing trim TDD style, expect syntax", function() {
    test("That returns empty string for empty string", function() {
        expect(trim("")).to.equal("");
    });
    test("That returns empty string for one space", function() {
        expect(trim(" ")).to.equal("");
    });
    test("That returns 'foo' for ' foo '", function() {
        expect(trim(" foo ")).to.equal("foo");
    });
    test("That returns 'fo o' for ' fo  o '", function() {
        expect(trim(" fo  o ")).to.equal("fo o");
    });
    test("That returns 'fo o' for 'fo    o'", function() {
        expect(trim("fo    o")).to.equal("fo o");
    });
    test("That returns a more complex sentence without two consecutive spaces", function() {
        expect(trim(" El   veloz murciélago   hindú comía   feliz   cardillo y kiwi    ")).
            to.equal("El veloz murciélago hindú comía feliz cardillo y kiwi");
    });
});

suite("Testing trim TDD style, assert syntax", function() {
    test("That returns empty string for empty string", function() {
        assert.equal(trim(""), "");
    });
    test("That returns empty string for one space", function() {
        assert.equal(trim(" "), "");
    });
    test("That returns 'foo' for ' foo '", function() {
        assert.equal(trim(" foo "), "foo");
    });
    test("That returns 'fo o' for ' fo  o '", function() {
        assert.equal(trim(" fo  o "), "fo o");
    });
    test("That returns 'fo o' for 'fo    o'", function() {
        assert.equal(trim("fo    o"), "fo o");
    });
    test("That returns a more complex sentence without two consecutive spaces", function() {
        assert.equal(trim(" El   veloz murciélago   hindú comía   feliz   cardillo y kiwi    "),
            "El veloz murciélago hindú comía feliz cardillo y kiwi");
    });
});

