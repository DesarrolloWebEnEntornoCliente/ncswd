(function (exports) {
    // Functors
    exports.complement = (predicate) => (...rest) => ! predicate.apply(predicate, rest);

    exports.compose = (...functions) => a => functions.reduce((g,f) => f.bind(f, g.call(g)), () => a).call(null);

    // Helpers
    exports.demethodize = function (fn) {
        return function() {
            var args = [].slice.call(arguments, 1);
            return fn.apply(arguments[0], args);
        };
    };

    exports.trampoline = function (fn) {
        // You probably want to implement a trampoline!
        while (fn && fn instanceof Function) {
            fn = fn();
        }
    };

    exports.loop = function (n, fn) {
        // Example: loop(8, console.log);
	      (function _loop(i) {
		        if (i <= n) {
			          sleep(1);
			          console.log("i " + i);
			          //fn.bind(i).call();
			          _loop(i - 1);
		        }
	      })(0);
    };

    exports.arrayMap = function (arr, fn) {
        return arr.reduce(function(p, n) {
            return p.concat([fn(n)]);
        }, []);
    };

    exports.map = function (arr, fn) {
        return arr.reduce(function(acc, item, index, arr) {
            return acc.concat(fn(item, index, arr));
        }, []);
    };

    exports.repeat = function (operation, num) {
        // Modify this so it doesn't cause a stack overflow!
        if (num > 0) {
            return function() {
                operation();
                return repeat(operation, --num);
            };
        }
    };

    // Histograms
    // Iterative version
    exports.histoIterative = function (cad) {
        var result = {}, car;
        for (var i in cad) {
            car = cad[i];
            result[car] = result[car] ? result[car] + 1 : 1;
        }
        return result;
    };

    // Recursive version
    exports.histoRecursive = function (cad) {
        function histoAcc(cad, acc) {
            var car;
            if (!cad) {
                return acc;
            } else {
                car = cad[0];
                acc[car] = acc[car] ? acc[car] + 1 : 1;
                return histoAcc(cad.slice(1), acc);
            }
        }
        return histoAcc(cad, {});
    };

    // Array Iterative version
    exports.histoArrayIterative = function (cad) {
        function acc(prev, curr) {
            prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
            return prev;
        }
        var arr = cad.split('');
        return arr.reduce(acc, {});
    };

    // Types of recursion
    // Final recursion
    exports.factorialFinal = function (n) {
        return n ? n * exports.factorialFinal(n - 1) : 1;
    };
    // Tail recursion
    exports.factorialTail = function (n) {
        var fn = function f(acc, n) {
            return n ? f(n * acc, n - 1) : acc;
        };
        return fn(1, n);
    };
    // Multiple
    exports.factorialMultiple = function (n) {
        return n < 3 ? 1 : exports.factorialFinal(n - 1) + exports.factorialFinal(n -2);
    };
    //CoRecursion
    exports.even = function (n) {
        return n == 0 ? true : exports.odd(n - 1);
    };
    exports.odd = function (n) {
        return n == 0 ? false : exports.even(n - 1);
    };

    // Trampoline
    function factorialTrampoline(n) {
        function _factorial(i, acc) {
            return i ? _factorial.bind(this, i - 1, i * acc) : acc;
        }
        return exports.trampoline(_factorial.bind(this, n, 1));
    }

    // Tests
    exports.testTrampoline = function(operation, num) {
        // You probably want to call your trampoline here!
        trampoline(repeat.bind(this, operation, num));
    };

    exports.countWords = function (inputWords) {
        return inputWords.reduce(function(p, n) {
            p[n] = ++p[n] || 1;
            return p;
        }, {});
    };

    function Spy(target, method) {
        var originalMethod = target[method];
        var that = this;
        this.count = 0;
        target[method] = function() {
            that.count++;
            return originalMethod.apply(this, arguments);
        };
        return this;
    }

    // More Trampolines
    function thunk(fn) {
	      return function() {
		        var args = arguments;
		        return function() {
			          return fn.apply(this, args);
		        };
	      };
    };

    function trampoline(fn) {
	      return function() {
		        return (function(bouncer) {
			          while (bouncer instanceof Function) {
				            bouncer = bouncer.apply();
			          }
			          return bouncer;
		        })(fn.apply(this, arguments));
	      };
    };

    function factorial(n) {
	      return trampoline(function _factorial(n, continuation) {
		        function identity(x) {
			          return x;
		        }
		        continuation = continuation || identity;
		        if (n < 2) {
			          return continuation(1);
		        } else {
			          return thunk(_factorial)(n - 1, function(result) {
				            return thunk(continuation)(n * result);
			          });
		        }
	      })(n);
    };
}(typeof exports === 'undefined' ? this['array'] = {} : exports));
