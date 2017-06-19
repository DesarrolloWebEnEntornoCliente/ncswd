chai.should();
describe('Checks length of strings', function() {
    it('should return 0 for an empty string', function() {
         length("").should.be.equal(0);
    });
    it('should return 1 for a one character string', function() {
         length("A").should.be.equal(1);
    });
    it('should return 3 for a three digit number', function() {
         length(999).should.be.equal(3);
    });
    it('should return 10 for a ten character string', function() {
         length("ten chars.").should.be.equal(10);
    });
});
