/*jslint
    devel : true
*/
var $ = document.getElementById.bind(document);
var useCapture = false;
function greet(e) {
    console.log("I'm " + e.currentTarget);
}
$("para").onclick = greet;
$("span").addEventListener('click', greet, useCapture);
