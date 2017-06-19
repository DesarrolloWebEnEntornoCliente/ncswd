var expect = chai.expect;

describe('Test simple calculator', function() {
    before(function() {
        showcalc();
    });

    after(function() {
        document.getElementById("test").innerHTML = "";
    });

    it('has to show 6 when placing 3 in each field', function() {
        document.getElementById("oper").value = 3;
        var button = document.getElementById("calc");
        var result = document.getElementById("result");
        button.onclick.call();
        expect(result.innerHTML).to.equal('6');
    });
});
