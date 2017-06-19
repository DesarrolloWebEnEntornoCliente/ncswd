(function (exports) {
    // Object that behaves like a function
    exports.objectAsFunction = Object.create(Function.prototype);

    // Create an object without using new
    exports.TheObject = function (n) {
        this.n = n;
    } ;

    // Objects with private properties (Closures)
    exports.Counter = function () {
        var n = 0;

        this.__proto__.get = function () {
           return n;
        };

        this.__proto__.inc = function () {
           n++;
        };
    };

    exports.MyCounter = {
        inc: function() {
            counter++;
        },
        get: function() {
            return counter;
        }
    };

    exports.MyObject = function() {
        var counter = 0;

        return Object.create(exports.My, {
            foo: { writable:true, configurable:true, value: "bah" },
            bar: { configurable: false,
            get: function() { return 10; },
            set: function(value) {
                console.log("Setting '.bar' to", value);
            }}});
    };

    // Closures
    exports.closureObject = function() {
        var privateproperty;
        return {
            'getPrivateProperty': function() {
                return privateproperty;
            },
            'setPrivateProperty': function(value) {
                privateproperty = value;
            }
        };
    };

    exports.staticObject = function(property) {
        var staticproperty = property;
        return function() {
            var privateproperty = 0;
            return function() {
                privateproperty++;
                return staticproperty + privateproperty;
            };
        };
    };

    exports.Problem = function (x, y){
        this.x = x;
        this.y = y;
    };

    exports.Problem.prototype.operations = {
        '+': function (x,y) {
            return x + y;
        },
        '-': function (x,y) {
            return x - y;
        }
    };

    exports.Problem.prototype.calculate = function(operation) {
        return this.operations[operation](this.x, this.y);
    };

    exports.Problem.prototype.newMessageMaker = function() {
        var that = this;
        var formatter = function() {
            return 'Values: ' + that.x + ' and ' + that.y;
        };

        return function(start, end) {
            return '' + start + formatter() + end;
        };
    };

    exports.doproblem = function() {
        console.log(exports.problem.calculate('+'));
        var messageMaker = exports.problem.newMessageMaker();
        // Do lots of things.
        console.log(messageMaker('This was the problem: ', 'Thanks for solving it!'));
    };

    // Inheritance example
    // Parent class
    exports.Animal = function(dna) {
        this.dna = dna;
    };
    exports.Animal.prototype.MSGS = {
        animalIs: function(action) {
            return `Animal with dna ${this.dna} is ${action}`;
        },
        fishesDontSleep: function(color) {
            return `But ${this.color} fishes don't sleep`;
        }
    };
    exports.Animal.prototype.eat = exports.Animal.prototype.MSGS.animalIs.bind(this, "Eating");
    exports.Animal.prototype.sleep = exports.Animal.prototype.MSGS.animalIs.bind(this, "Sleeping");
    // Child class
    exports.Fish =  function(dna, color) {
        exports.Animal.call(this, dna);
        this.color = color;
    };
    // Inheritance
    exports.Fish.prototype = Object.create(exports.Animal.prototype);
    exports.Fish.prototype.constructor = exports.Fish;
    // Child overrides Parent method
    exports.Fish.prototype.sleep = function () {
        exports.Animal.prototype.sleep.call(this);
        return this.MSGS.fishesDontSleep();
    };
}(typeof exports === 'undefined' ? this['objects'] = {} : exports));
