/*jslint
    devel : true
*/
/*global
    isPrime
*/
var result = isPrime(prompt("Introduce un número: "))
    ? ""
    : "no ";
alert("El número introducido " + result);
