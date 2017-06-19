# JavaScript Koans #

## Reserved words and types ##

Write JavaScript programs using exclusively the reserved words and the types of the language

### Booleans ###

1. Ask for a string, analize if it is a boolean, a number or a string and show its truth value
2. Show the truth tables of the logical connectors: conjunction, disjunction, exclusive disjunction, implication and biconditional

### Numbers ###

1. Ask for two numbers and show its sum
2. Ask for two numbers and show the greater
3. Ask for a number and divide it by 2, by 4 and by 8
4. Ask for a number and show if it is odd or even
5. Ask for a number an show a countdown to 0
6. Ask for three numbers and show the shortest
7. Ask for N numbers and show the greatest
8. Ask for three numbers and show the one in the middle. In case there is no one in the middle show a proper message
9. Ask for four numbers and show them in order
10. Ask for numbers and calculate the mean. To stop asking for numbers the user must enter a negative number. Calculate also the harmonic mean, the root mean square and the geometric mean
11. Ask for numbers. To stop asking for numbers, the user must enter 0. Show a simple histogram using asterisks: The number of positive number and the number of negative numbers
12. Ask for two numbers and show the remainder of its division (consider negative numbers)
13. Ask for the height and weight of the user and inform him about his nutritional status based on his BMI (Body Mass Index)
14. Ask for a number and show the sum of all natural numbers from 1 to the number entered
15. Ask for two numbers and show the sum of all natural numbers from the lower to the greater including both
16. Ask for an hour of the day between 0 and 11 and a number of hours. Show the time a clock would show after the number of hours passed
17. Ask for a number and show all multiples from 0 to 100
18. Ask for a number and show the number of digits it has
19. Ask for a number and show its digits in the reverse order
20. Ask for a price an show the price including a tax of 21%
21. Ask for a price which includes a tax of 21% and show the price without a price
22. Ask for a year and show if it is a leap year or not
23. Ask for the duration in minutes of travels until a 0 or a negative number is given and show the total duration in hours and minutes
24. Ask for a number and show its integer part
25. Ask for a number and show its decimal part
26. Ask for two numbers and show its division indicating if it has remainder or not
27. Ask for a base and an exponent and show the power
28. Ask for a number and show all powers of 2 from 0 to the one given
29. Ask for a number and show its factorial
30. Ask for two numbers and show its binomial coefficient
31. Calculate the number of points which sum the domino tiles
32. Show the different combinations when a pair of dice are thrown
33. Ask for a number ans show the number of combinations that exists to get that number when a pair of dice are thrown adding its points
34. Ask for a number in the decimal base and show it in binary, octal and hexadecimal
35. Ask for a number and show the integer part of its square root
36. Ask for a number and show all of its proper divisors
36. Ask for two numbers and show its common divisors
38. Play the Fizz Buzz game
39. Ask for a number of seconds and shows it in format HH:MM:SS
40. Ask for an number and show if it is prime or not
41. Ask for two number and show their GCD (Great Common Divisor)
42. Ask for an number and obtain all its prime factors
43. Ask for an number and calculate the sum of its digits
44. Show the multiplication table
45. Show a simple calculator which asks for an operand, an arithmetic operator and another operand and displays the result of the calculation
46. Ask for number between 0 and 998 until 999 is entered, in which case the sum of all numbers entered is displayed (not including 999)
47. Ask for three numbers and show if they are the sides or a triangle. If this is the case, show the type of triangle
48. Ask for numbers (until the user enters 0)and show how many of them are positive and the sum of them all
49. Calculate the number of years until the sum of the ages of three children of 14, 12 y 9 will be equal to the age of their parent who no is 43
49. Ask for numbers between 1 and 100 until a number chosen by the developer is entered. To help the user to guess the number, he will be informed if the secret number is less or greater than the last number entered. Once done, exchange the roles, the users chooses the number and the program guesses it
51. Ask for the dimensions of a matrix y show only those positions whci coordinates are both odd
52. Ask for a PIN number (four digits) and let the user try three times to guess the same PIN as the one chosen by the developer
53. Ask for the number of hours worked and the extra hours and calculate the gross weekly payment. An hour is 10€ and the extra is 15€
54. Ask for the ages of a father and a son and show the number of years until the parent doubles in ages his son
55. Ask for a number and show the triangle of Pascal of height equal to the number entered
56. Ask for coefficients of a first degree equation and show its solution
57. Ask for coefficients of a second degree equation and show its solution
58. Ask the users for the coordinates of the center and the radius of two circles and show the number of point which they intersect
59. Ask for a number and show in columns the position of digits of all the numbers from 0 to the number chosen, for instance if 20 is entered:

        000000000011111111112222222
        012345678901234567890123456

### Strings ###

1. Ask the name of the user and greet him
2. Show the days of the week (one per line)
3. Ask for a character and show if it is a letter, a number or another type of char
4. Ask for two words and show which is longer and how many characters differ from the other
5. Ask for a number of words. Ask the user to enter that number of words. Show the shortest and the longest word
6. Ask for a cloth size and show its size according to the following table:

        -----------------------
        | XXL, XL, L | Big    |
        | M          | Normal |
        | XS, S      | Small  |
        -----------------------

7. Ask for a string and show if it is a palindrome or not
8. Ask for a string and remove the unnecessary spaces (the ones at the beginning, end and only one between words)
9. Ask for a number and show a triangle of asterisks which base is the number of asterisks long
10. Ask for a number and show a template like the following (for number 7)

        *
        **
        ***
        ****
        *****
        ******
        *******

11. Ask for a number and show a template like the following (for number 7). The template is indented using the same number of spaces

               1******
               12*****
               123****
               1234***
               12345**
               123456*
               1234567

12. Ask for an even number and show a template like the following (for number 8)

        *
        ***
        *****
        *******
        *********
        *********
        *******
        *****
        ***
        *

13. Ask for a number and draw an hexagon of side the number entered (for number 4)

           ****
          ******
         ********
        **********
         ********
          ******
           ****


14. Ask for a string and show if it contains only uppercase letters, only lowercase letters, only numbers or only characters different to the ones described
15. Ask for a string. If the last character is a letter, it will be considered a NIF (Número de Identificación Fiscal) and show the user which kind of NIF is or if it is invalid. If the last character is not a letter and the rest of the characters are digits it will calculate the letter
16. Ask for a string and show the user if it is a pangram
17. Ask the user two numbers and a letter ("o" or "e" lowercase or uppercase). The "o"dd numbers or "e"ven numbers between the two entered will be shown
18. Ask for a string and code it using the order in the alphabet: A->01, B->02, C->03, ...
19. Let two users play the Rock-paper-scissors game. The program will ask for the number of rounds that a player must win to end the game. The current score will be shown in each round
20. Ask for a MAC-48 address, validate it, if it is correct convert it to a link local IPv6 address
21. Ask for a string and cypher it using the ROT13 method
22. Ask for a string and code it using the Base64 method
23. Ask for a string and code it using the RLE method

## Predefined Objects ##

Write the previous challenges using the browser predefined objects and write the following challenges

### Strings ###

1. Show if a string is contained inside another one
2. Show the number of times a string appears inside another one
3. Ask for a string and a character and remove all occurrences of the character inside the string
4. Ask for a string and show an histogram of the characters inside the string using asterisks to display the frequency
5. Ask for a string and show it in lowerCamelCase, removing all spaces, tildes, ...
6. Ask for a string and substitute uppercase letters for downcase letters and viceversa
7. Ask for a string and "alphabetize" it, that is show another string containing the letters of the first string in alphabetic order
8. Ask for a string in lowercase and show it in such a way that it can be read turning the screen. To do this, use the conversion: a -> e, h -> y, etc.
9. Ask for a string containing HTML tags and remove all tags
10. Ask for two strings, the second is composed by word separated by | character. Show the number of times each word appears in the first string. No distinction between uppercase and lowercase
11. Write a similar function like printf of the C language. It will take a format string and the arguments to use in the interpolation

### Dates ###

1. Show the current time and date like the following:

Today is Thursday, October the 10th 2013. It's 12:34

2. Ask the user for his name and greet him according to the current time
3. Show the days to the end of current year

### Math ###

1. Ask for the price of a product en €/Kg and the weight in Kg and show the price to pay (rounded to two decimals)
2. Ask for the radius of a circle and show its length and area
3. Show the value of number π using exclusively the arctan function
4. Ask for two numbers and generate a random number between the two
5. Ask for a number show it in binary, octal and hexadecimal
6. Ask for an arithmetic expression and calculate its value
7. Show the user a random arithmetic expression containing two operands and a sum or substraction operand, for instance "3 + 2", "8 - 3". The user will enter the res8lt of the operation and the program will show if it is correct or not.
9. Ask for the three coefficients of a second degree equation and solve it. In case it has complex solutions it will inform about this situation
10. Take a random number between 1 and 100 and ask for a number. Show if the number is less or greater than the one chosen until the user guess the number
11. Ask for the name of the user and show one of its letters randomly
12. Calculate an approximation of π using the Montecarlo method. The user will enter the number o throws to do

### Regular Expressions ###

1. Ask for a phone number and validate it
2. Ask for a string which contains email addresses (one per line) and show the same string in which three characters of the name of the mailbox have been substituted by three asterisks and three characters of the provider (excluding the dot) have been substituted by three asterisks
3. Ask for a credit card number using the format "1234-5678-9012-3456" and show it with the hyphen removed, for the previous example: 1234567890123456
4. Show the first chapter of "El Quijote", ask the user for a word and show the number of times the word appears in the text

### Errors ###

1. Ask for a JavaScript expression and evaluate it. Capture the different types of exceptions (errors) that the expression can contain y notify then in a way a user can understand
2. Ask for a sentence. If this sentence contains "foo" (in every lowercase or uppercase) combination, a error will be emitted which once captured shows that the forbidden word have been written

### Browser ###

1. Show the number of pixels of the screen
2. Show the browser and OS used
3. Ask the user for his name and surname and show the following information (sample data is shown between square brackets)

    Hi [John]!
    Today is [monday], [november] the [8th], [2014]. It is  [16:00:00], so we have [23] days remaining jto the end of year
    Your surname is [3] letters long
    You are using [SomeBrowser] browser, version [BrowserVersion] and the Operating System [SomeOS]
    You are working [with/without] connection

### Document ###

1. Ask the user for his name and surname, phone number, email address and show this information using different fonts, colors, sizes and formats using exclusively the document and string object methods (no HTML)
2. Show three images with number 1, 2 and 3. When the user clicks an image, a message showing the number of the image the user clicked
3. Show the text "Click here", when the user clicks the text, the number of times the user click will be shown

### Timers ###

Write web pages that:

1. Shows the message "Hello world!" after 5 seconds
2. Shows a different image from a gallery every 5 seconds
3. Shows a working digital clock

### Events ###

1. Greet the user when the page is opened and say bye when the page closes
2. Show the X and Y coordinates when the user clicks on the page
3. Calculate the square of a number while the digits of the number are being typed by the user
4. Change the background color to red when the user clicks with the main button of the mouse, to yellow when the user clicks with the middle button and to green when the user clicks with the secondary button. To reset the background color the user will double click
5. A web page which includes elements of various types. When the user clicks in any of them, the type of the element clicked will be shown:
6. A web page containing the following elements. The user can program the behavior of the buttons. To do that, the user will select one of the buttons and one of the colors, when the user click the button, the background colors of the page will change to the colors programmed
        Three buttons with labels 1, 2 and 3
        A list with the names of the above buttons
        A list with the colors: red, yellow and green
        A button with label "Assign"
7. A web page which contains a list of links and avoid the user to open those links
8. Show red in the background when the users presses the "R" key, yellow when he presses the "A" and green when he presses "G"
9. A web page that contains a text box and a notification area. In the notification area the number 0 will be displayed. This number will be incremented automatically while the user press a key inside the text box
10. A web page that contains a text box in which the user can write his name and a notification area in which he will be greeted showing the characters introduced in the text box a the same time the keys are pressed
11. A web page that contains a text box and a hidden word. The user must guess the hidden word. To help him, the background will be shown in red. Each time the user press a key which corresponds to a letter contained in the hidden word is pressed, the background will change to yellow. When the user presses a key not included in the hidden word the background will change to red. When the user guesses the word, the background will change to green
12. A web page that show an area in which the user can draw points by doing click in the area. To create dynamically the points, the createElement and appendChild methods can be used. The position of the points can be controlled dynamically using the style property
13. Show a circle that can be dragged with the mouse
14. A web page that contains text boxes. When the focus gets into each of the boxes, a help message will be shown informing about the type of information that can be entered in the box
15. A web page that triggers and handles a user-defined event

## Arrays, User-defined Objects and Functions ##

Write the following challenges using arrays, objects and functions

### Arrays ###

1. A web page that defines an array of people and ask the name of the user. Search the name in the array and if its not located show an error
2. Write the function gameWinner that takes two arrays as arguments. The first array represents the five cards of the first player (from A to K), the second array the five ones assigned to the second player. The function must compare both arrays and return a negative number if the first player has the higher card, a positive number if the second player has the higher card and zero in other case
3. Write the function histogram which takes a string and return an array containing the name of occurrences of the letters of the alphabet beginning with "a"
4. Write the function removeDuplicates that removes all duplicate values of an array
5. Write the function sumArrays that takes one or more arrays of the same length and return an array which its elements are the sum of the elements with the same index
6. Write the function arrayN which admits a natural number an returns an array which has 1 as its first element, 2 as its second element, and son on
7. Write the function zipArrays which behaves the same as the zip function of the Ruby programming language
8. Using the push and pop methods of the Array object, write the function invertList which inverts the order of the argument it receives
9. Write a web page which admits a phrase and show: the first word, the last word, the total number of words and a list of the words in alphabetical order separated by commas

### User-defined objects ###

1. Create a web page that declares a Car object with the following attributes: Manufacturer, model, numberplate and color. Declare an object CarDealer with the following attributes: name, address and stock. Stock is an array of Cars. Create different car dealers containing cars and display them in a web page
2. Modify the previous page to show a form in which the user can type the fields of a car and add it to a car dealer. Check if the numberplate entered belongs to one of the cars in the system
3. Write the predicate compareObjects taht takes two objects and evaluates to true if both of them have the same properties and false in other case
4. Create a web page that defines a structure of 5 objects of type "Building" with the following properties: Street, number, construction date, number of floors. Display the structure using different fonts, sizes, colors, etc.

### Functions ###

Write the following functions:

1. factorialIterative which evaluates to the factorial of a number using an iterative approach
2. factorialRecursive which evaluates to the factorial of a number using an recursive approach
3. factorialTailRecursive which evaluates to the factorial of a number using an tail recursion
4. add which evaluates to the sum of all of its arguments
5. power which evaluates to the first argument powered to the second
6. min which evaluates to the minimum element of an array of integers
7. squareSum which evaluates to the sum of the squares of a list integer numbers (passed as arguments)
8. greatCommonDivisor which evaluates to the GCD of two numbers
9. sort which evaluates to a ordered version of the array received as argument
10. shuffle which evaluates to a random version of the array received as argument
11. fibonacci which evaluates to the nth number of Fibonacci
12. bernoulli which evaluates to the nth number of Bernoulli
13. sumNumbers which evaluates to the sum of the first n natural numbers
14. odd which evaluates to a list of the odd elements that receives as arguments
15. even which evaluates to a list of the odd elements that receives as arguments
16. zeta which evaluates to the Riemann's Zeta function
17. sequence which admits two arguments m and n and evaluates to an array of n elements in which each element is m
18. filterEmails which gets a bunch of strings and evaluates to an array which contains only the strings that represent a valid email address
19. range which admits three arguments: begin, end and step and evaluates to an array which the first element is begin, the second element is first + step and so until it reaches end. Step is and optional argument defaulting to 1
20. keysObject which iterates through the object's keys using iterators
21. greet tha takes a function as argument and evaluates  que tome como argumento una función y devuelva otra que añade la cadena "Hola, " al resultado de evaluar la función que se pasa como argumento
22. same which takes an argument and evaluates to that argument
23. identity which takes an argument and evaluates to a function that evaluates to that argument when called
24. Three binary functions: add, sub and mul which evaluates to the result of adding, substractig and multiplying its arguments respectively
25. addf which adds two invocations: addf(3)(4) -> 7
26. liftf that takes a binary function and make it callable with two invocations:

        var addf = liftf(add)
        addf(3)(4)  -> 7
        liftf(mul)(5)(6)  -> 30

27. curry that takes a binary function and an argument an returns a function that can take a second argument (currying ~ schönfinkelisation)

        var add3 = curry(add, 3);
        add3(4) -> 7

28. twice that takes a binary function and returns a unary function that passes its argument to the binary function twice:

        add(11, 11) -> 22
        twice(add)(11) -> 22
        twice(mul)(11) -> 121

29. reverse that reverses the arguments of a binary function

        var bus = reverse (sub)
        bus(3, 2) -> -1

30. composeu that takes two unary functions and returns a unary function that calls them both

        composeu(doubl, square)(5) -> 100

31. composeb that takes two binary functions and returns a function that calls them both

        composeb(add, mull)(2,3,7) -> 35
32. once that allows a binary function to be called only once

        var add_once = once(add);
        add_once(3,4) -> 7
        add_once(3,4) -> undefined

32. fromTo that produces a generator that will produce values in a range

        var index = fromTo(0, 3);
        index() -> 0
        index() -> 1
        index() -> 2
        index() -> undefined

33. element that takes an array and a generator and returns a generator that will produce elements from the array

	    var ele = element(['a', 'b', 'c', 'd']), fromTo(1,3));
        ele() -> 'b'
        ele() -> 'c'
        ele() -> undefined

34. element so that the generator is not provided. If the generator is not provided, then, each of the elements of the array will be produced
35. collect that takes a generator and an array and produces a function that will collect the results in the array

        var array = [], col = collect(fromTo(0, 2), array);
        col() -> 0
        col() -> 1
        col() -> undefined
        array -> [0, 1]

36. filter that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate

        var fil = filter(fromTo(0, 5), function third(value) {
            return (value % 3) === 0;
        }
        fill() -> 0
        fill() -> 3
        fill() -> undefined

37. concat that takes two generators and produces a generator that combines the sequences

        var con = concat(fromTo(0, 3), fromTo(0, 2))
        con() -> 0
        con() -> 1
        con() -> 2
        con() -> 0
        con() -> 1
        con() -> undefined

38. repeat that takes a generator and calls it until it returns undefined

        var array = []
        repeat(collect(fromTo(0, 4), array));
        log(array); -> 0, 1, 2, 3

39. map that takes an array and a unary function an returns an array containing the result of passing each element of the unary function. Use the repeat function

        map ([2,1,0], inc) -> [3,2,1]

40. reduce that takes an array and a binary function and returns a single value. Use the repeat function

        reduce([], add) -> undefined
        reduce([2], add) -> 2
        reduce([2,1,0], add) -> 3

41. gensymf that makes a function that generates unique symbols

        var geng = gensymf("G"), genh = gensymf("H")
        geng() -> "G1"
        genh() -> "H1"
        geng() -> "G1"
        genh() -> "H1"

42. gensymff that takes a unary function and a seed and returns a gensymf

        var gensymf = gensymff(inc, 0)
        var geng = gensymf("G"), genh = gensymf("H")
        geng() -> "G1"
        genh() -> "H1"
        geng() -> "G1"
        genh() -> "H1"

43. fibonaccif that returns a generator that will return the next Fibonacci number
44. counter that returns an object containing two functions that implement an up/down counter hiding the counter:

        var object = counter(10)
        var next = object.next
        var prev = object.prev
        next(11)
        prev(10)
        prev(9)
        next(10)

45. revocable that takes a unary function and returns an object containing an invoke function that can invoke the unary funciton and a revoke fucntion that disables the revoke function

        var rev = revocable(identity), invoke = rev.invoke;
        invoke(7) -> 7
        rev.revoke()
        invoke(8) -> undefined

46. m that takes a value and an optional source string and returns them in an object

        JSON.stringfy(m(1)) -> {"value": 1, "source": "1"}
        JSON.stringfy(m(Math.PI, "pi")) -> {"value": 3.14..., "source": "pi"}

47. addm that takes two m objects and return an m object

        JSON.stringfy(addm(m(3), m(4))) -> {"value": 7, "source": "(3+4)"}
        JSON.stringfy(addm(m(1), m(Math.PI, "pi"))) -> {"value": 4.14..., "source": "(1+pi)"}

48. liftm that takes a binary function and returns a function that acts on m objects

        var addm = liftm(add, "+");
        JSON.stringfy(addm(m(3), m(4))) -> {"value": 7, "source": "(3+4)"}
        JSON.stringfy(liftm(mul, "*")(m(3), m(4))) -> {"value": 12, "source": "(3*4)"}

49. exp that evaluates simple array expressions

        var sae = [mul, 5, 11]
        exp(sae) -> 55
        exp(42) ->  42

50. Modify exp to evaluate nested array expressions

        var nae = [
            Math.sqrt,
            [
                add,
                [square, 3]
                [square, 4]
            ]
        ];
        exp(nae) - > 5

51. addg that adds from many invocations, until it sees an empty invocation

        addg() -> undefined
        addg(2)() -> 2
        addg(2)(7)() -> 9
        addg(3)(0)(4)() -> 7

52. liftg that will take a binary function and appy it to many invocations

        lift(mul)() -> undefined
        lift(mul)(2)() -> 2
        lift(mul)(2)(7)() -> 14
        lift(mul)(3)(0)(4)() -> 0

53. arrayg that will build an array from many invocatios

        arrayg() -> []
        arrayg(3)() -> [3]
        arrayg(3)(4)(5)() -> [3, 4,5]

54. continuize that takes a unary function and returns a function that takes a callback and an argument

        sqrtc = continuze(Math.sqrt)
        sqrtc(alert, 81) -> 9

55. An array wrapper object with methods get, store and append such that an attacker cannot get access to the private array

        myvector = vector();
        myvector.append(7)
        myvector.store(1,8);
        myvector.get(0);
        myvector.get(1);

56. pubsub that makes a publish/subscribe object. It will reliably deliver all publications to all subscribers in the right order

        my_pubsub = pubsub()
        my_pubsub.subscribe(log)
        my_pubsub.publish("It works!") -> log("It works!")

57. func which takes a function and a bunch of argument and evaluates to other in which the argumets are taken form left to right: func(f, 1, 2, 3) -> g | g() = f(1, 2, 3)
58. complement which takes a predicate and evaluates to the predicate's complement
59. compose which takes a bunch of unary functions (except the first) and evaluates to the function which is the composition of all of them

## Quizzes ##

1. funky

        function funky(o) {
            o = null;
        }
        var x = [];
        funky(x);
        alert(x)

A. null
B. []
C. undefined
D. throw

2. swap

        function swap(a, b) {
            var temp = a;
            a = b;
            b = temp;
        }
        var x = 1, y = 2;
        swap(x, y);
        alert(x);

A. 1
B. 2
C. undefined
D. throw

3. Without writing any new function, show three way to create the inc function
