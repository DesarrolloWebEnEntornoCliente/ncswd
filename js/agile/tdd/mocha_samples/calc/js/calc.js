(function(module) {
    module.showcalc = function() {
        var test = document.getElementById("test");
    test.innerHTML = '<input type="text" id="oper">';
        test.innerHTML += '<button id="calc">Calc</button>';
        test.innerHTML += '<p id="result"></p>';
        document.getElementById('calc').onclick = function() {
            document.getElementById('result').innerHTML = document.getElementById("oper").value * 2;
        };
    }
})(this);
