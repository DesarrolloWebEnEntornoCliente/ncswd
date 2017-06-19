/*jslint
  devel : true browser: true */
/*global
    chai, describe, it, trim */
chai.should();

describe("Testing trim BDD style", function () {
    it("Should return empty string for empty string", function () {
        trim("").should.be.equal("");
    });
    it("Should return empty string for one space", function () {
        trim(" ").should.be.equal("");
    });
    it("Should return 'foo' for ' foo '", function () {
        trim(" foo ").should.be.equal("foo");
    });
    it("Should return 'fo o' for ' fo  o '", function () {
        trim(" fo  o ").should.be.equal("fo o");
    });
    it("Should return 'fo o' for 'fo    o'", function () {
        trim("fo    o").should.be.equal("fo o");
    });
    it("Should return a more complex sentence without two consecutive spaces", function () {
        trim(" El   veloz murciélago   hindú comía   feliz   cardillo y kiwi    ")
            .should.be.equal("El veloz murciélago hindú comía feliz cardillo y kiwi");
    });
});
