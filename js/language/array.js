(function (exports) {
    exports.fillArray = function(number) {
        return Array(number).fill(0).map(function(_, i) {
            return i;
        });
    };

    exports.range = function(ini, end, step = 1) {
        return "TBI";
    };

    exports.removeDuplicates = function(array) {
        return array.sort().reduce((array, element) =>
            element === array[0] ? array
                                 : [element].concat(array),[]
        );
    };

    exports.intervals = function (data, number) {
        var max = Math.max.apply(Math, data);
        var min = Math.min.apply(Math, data);
        var size = Math.floor((max - min) / number);
        var fn = (function elem(base, tram, n, x, y) {
            var pos = Math.floor((y - base) / tram);
            x[pos === n ? pos - 1 : pos]++;
            return x;
        }).bind(this, min, size, number);
        return data.reduce(fn, new Array(number).fill(0));
    };
}(typeof exports === 'undefined' ? this['array'] = {} : exports));
