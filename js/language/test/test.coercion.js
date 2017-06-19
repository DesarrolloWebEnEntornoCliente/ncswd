var chai = require("chai");
var expect = chai.expect;

describe("when coercing values", function(){
    it("considers numbers to be equal to their string representation", function(){
        expect(1 == "1").to.be.true;
        expect(1 != "1").to.be.false;
    });

    it("knows that numbers and strings are not exactly the same", function(){
        expect(1 === "1").to.be.fales;
        expect(1 !== "1").to.be.true;
    });

    it("joins parts as string when using the plus operator", function(){
        expect(1 + "a").to.be.equal("1a");
    });

    it("operates integers before joining the string", function(){
        expect(1 + 1 + "2").to.be.equal('22');
    });

    it("knows the type of the variable", function(){
        var x = 1;
        expect(typeof(x)).to.be.equal('number');
    });

    it("surprises me, NaN is not comparable with NaN", function(){
        expect(5 / "a").not.to.be.equal(5 / "a");
        expect(typeof(NaN)).to.be.equal('number');
        expect(isNaN(5 / "a")).to.be.true;
    });

    it("considers an empty string to be falsy", function(){
        //expect("" == false).toBe......();// Truthy or Falsy
        //expect("" === false).toBe.....();// Truthy or Falsy
    });

    it("considers zero to be falsy", function(){
        //expect(0 == false).toBe......();// Truthy or Falsy
        //expect(0 === false).toBe.....();// Truthy or Falsy
    });

    it("considers nulls to be falsy", function(){
        //expect(null == false).toBe......();// Truthy or Falsy
        //expect(null === false).toBe.....();// Truthy or Falsy
    });

    it("knows the type of a function", function(){
        function x(){}

        expect(x).to.be.a('function');
        //expect(typeof(xxx)).toBe('...');// Truthy or Falsy
    });

    it("concatenate arrays - well, kind of", function(){
        var a = [1,2,3];
        var b = [4,5,6];

        //expect(a + b).toEqual('...');
    });

    it("joins arrays and strings", function(){
        var a = [1,2,3];

        //expect ("1" + a).toEqual(...);
        //expect(a + "1").toEqual(...);
    });

    it("joins arrays and other things", function(){
        var a = [1,2,3];
        var b = ['x', 'y', 'z'];

        //expect(1 + a).toEqual(...);
        //expect(a + 1).toEqual(...);
        //expect(1 + b).toEqual(...);
        //expect(true + a).toEqual(...);
    });

    it("can't compare arrays", function(){
        var a = [1,2,3];
        var b = [1,2,3];

        //expect(a == b).toBe.....();  // Truthy or Falsy
        //expect(a === b).toBe.....(); // Truthy or Falsy
    });

    it("is not the same to compare by value than by reference ", function(){
        var a = [1,2,3];
        var b = [1,2,3];

        expect(a).to.be.deep.equal(b);
        expect(a).eql(b);
    });
});
