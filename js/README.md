# Things to remmember when writing JavaScript #

1. Variables. JavaScript uses lexical scope. All global varibles and
   functions are properties of the global object

         var x=1;
         function g() {
             console.log(x);
             x=2;
         }
         function f() {
             var x=3;
             g();
         }
         f(); // prints 1 not 3
         console.log(x); // prints 2 not 1

2. Types
  * Booleans. Only two values: true or false
  * Numbers. 64bit FP ()same as Java's double)
  * Strings. Scalar array of characters

2. Falsy values:
  * false
  * null
  * undefined
  * ''
  * 0
  * NaN

3. Thurly values:
  * true
  * Those which are not false ;-)

4. Coercion rules: Types are coerced, you can use the following operators
   to test in the console, assuming $ is the value to coerce:
  * To coerce a Boolean to Number:
      * \+ $
      * $ + 0
      * $ - 0
      * $ * 1
      * $ / 1
  * To coerce a Boolean to String:
      * $ + ""
      * "" + $
  * To coerce a Number to Boolean:
      * !! $
  * To coerce a Number to String:
      * $ + ""
      * "" + $
  * To coerce a String to Boolean:
      * !! $
  * To coerce a String to Number:
      * \+ $
      * $ * 1
      * $ / 1

5. Objects:
   JavaScript is a prototypal inheritance language. The language is
   class-free Literal

        { property:value, .... }

6. Functions. Invocation. Every function when invoked receives two parameters:
  * ``arguments``. An scalar array containing the actual arguments
  * ``this``. Depends on how the function is called
      * When called as a method, `this` is the object to which the function is bound.
        It would be preferable that `this` would be bound to the `this` variable offline
        the outer function. There is a workaround for this: use 'that' by convention.
        This binding occurs at invocation time.

            var that = this

      * When called with the `new` operator, the function is called a constructor, in
        this case a new object will be created with a hidden link to the value of the
        function's `prototype` member and `this` will be bound to that new object.
        The `new` prefix also changes the behaviour of the `return` statement, if
        the returned value is not an object, then `this` (the new object) is returned
        instead. Functions intended to be used with the `new` prefix are called
        constructors. By convention they are kept in variables with a capitalized name.

      * When called with `call`, `apply` or `bind` function methods, `this` will be
        bound to the first argument passed to `call`, `apply` or `bind`

7. Exceptions. throw must return an 'exception' object with two properties: name and message.
   This object will be delivered to the catch part.

        throw {
            name: 'TypeError',
            message: 'Bad type'
        }

# Best Practices when writing JavaScript #

1. Th code must be maintenable. We must think that, nowadays development is
   collaborative so we have to think in other developers writing code:
 * Intuitive
 * Understable
 * Adaptable
 * Extensible
 * Debugable
 * Testeable

2. Don't mix JavaScript code with other languages:
 * Don't use JS in HTML

              <button onclick="doit();">Send</button>

 * Don't use HTML in JS

              document.getElementyId("container").innerHTML = "<div class=\"data\"></div>";

 * Don't use JS in CSS

              .ring {
                  width:expression(document.body.clientWidth < 955 ? "955px": "100%" );
              }

 * Don'mt use CSS in JS

              document.getElementyId("contenedor").style.color = "red";

3. Blocks
 * Use always explicit blocks
 * Avoid assignments in conditional expressions inside `if` , `while`, etc.
 * Never leave open if and switch blocks: always include else and default
 * Use [1TBS variant](https://en.wikipedia.org/wiki/Indent_style#Variant:_1TBS) of K&R style
 * Always end your sentences with `;`

4. Indentation and spacing
 * The less code per line the less chance to get a merge conflict when pushing
   it to a repository
 * Adapt oneself to the mode of indentation chosen for the project. In case
   its not defined a common choice is to use four spaces for indentation
 * Use spaces to enhance the legibility of the code (but don't abuse)
 * Every reserved word followed by `(` must be separated by one space
 * Don't use spaces between a function call and `(`. This will help to
   distinguish reserved words from functions
 * All binary operators apart from dot, `(` and `[` must be separated from its
   operands by an space
 * Don't put an space between an unary operator and its operand except when
   the operator is a word like `typeof`
 * Write always an space after a `,`
 * Avoid lines longer then 80 characters
 * If you have to break a line, do it after an operator. Better after a `,`
 * Use a space after every `;` in a for sentence

5. Functions and variables
 * Avoid naming variables using reserved words for the extension of the language
 * Avoid declaration of variables and functions in global scope. Declare them
   inside a namespace
 * Declare all variables in the beginning of the block of code in which they are
   used
 * Beware of the return sentence in functions, write only one, must be the last
   of the function and end it with `;`
 * Don't compare variables with null. If you use instanceof to check object
   types and type of for language types, understand first why these operator work
 * `eval` is evil. Don't use eval, only in very justified cases and when everything
   being evaluated has been validated first
 * Strings changes during developemnt. Don't write them literally in the code,
   use constants. This applies to URLs, messages, configuration variables.
   This applies to numeric constants too

        const GOODBYE_MESSAGE = "Auf Wiedersehen!";
        const NUMBER_OF_CARS = 10;

6. Objects
 * Don't modify objects you haven't created
 * Create and trigger our own `Error` objects
 * Beware of function `parseInt` (octal, hexa,...)
 * Use arrays when the name of the members are integers in sequence
 * Use objects when the name of the members are strings of any kind
 * Use `{}` instead of `new Object()`
 * Use `[]` instead of `new Array()`

7. Operators
 * Use `===` instead of `==` and `!==` instead of `!=`
 * To ease code legibility the following operators are not recommended:
   * `++`
   * `--`
   * `?:`

8. Naming
 * Use proper and descriptive names for variables and functions
 * Don't worry about the length of your names
 * Use names for variables and start your function names with verbs
 * Start your predicate names with 'is' or 'has'
 * Avoid names that don't give any information like 'temp', 'val', 'aux', ...
 * Use [lowerCamelCase](https://en.wikipedia.org/wiki/Camel_case) for your
   names in case they consists in more than one
 * Constructors must start with a capital letter
   word
 * Write in CAPS the name of variables that behave like constants (or the
   constants themselves). Separate the words with an underscore `_`

9. Reserved words
 * Beware with `switch`/`case` blocks, in case you use them don't forget to
   include break and default
 * It is not recommended to use the following reserved words: `break`,
   `continue`, `void`, `with`

10. Miscellaneous
 * Use QA tools like linters to enhance your code and detect potential problems
 * Take a look at [JavaScript Garden](ttp://bonsaiden.github.io/JavaScript-Garden/)
   to get information about the gory details of JavaScript

# Namespaces #

Always try to avoid changes in the objects you have not created.
Namespaces can be of great help. Find below some techniques to
create them

1. Using an object

        var myNS = {
            counter: 0,
            inc: function() {
                return myNS.counter++;
            },
            reset: function() {
                myNS.counter = 0;
            }
        };
        myNS.inc();
        myNS.inc();
        myNS.reset();
        myNS.inc();

2. Using a closure (IIFE)

        var myNS = (function() {
            var counter = 0;
            return {
                inc: function() {
                    return counter++;
                },
                reset: function() {
                    counter = 0;
                }
            };
        }());
        myNS.inc();
        myNS.inc();
        myNS.reset();
        myNS.inc();

3. Using a closuse (IIFE with an argument)

        var myNS = {};
        (function(ns) {
            var counter = 0;
            ns.inc = function() {
                return counter++;
            };
            ns.reset = function() {
                counter = 0;
            };
        }(myNS));
        myNS.inc();
        myNS.inc();
        myNS.reset();
        myNS.inc();

4. Using a closuse (IIFE using this)

        var myNS = {};
        (function() {
            var counter = 0;
            this.inc = function() {
                return counter++;
            };
            this.reset = function() {
                counter = 0;
            };
        }.call(myNS));
        myNS.inc();
        myNS.inc();
        myNS.reset();
        myNS.inc();
