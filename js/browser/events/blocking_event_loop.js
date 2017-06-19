function repeat(operation, num) {
  var t = setInterval(function() {
    if (num <= 0) {
      clearInterval(t);
    } else {
      operation();
      return repeat(operation, --num);
    }
  }, 500);
}

function repeat2(operation, num) {
   if (num <= 0) return
   operation()
   // release control every 10 or so
   // iterations.
   // 10 is arbitrary.
   if (num % 10 === 0) {
     setTimeout(function() {
       repeat(operation, --num)
     })
   } else {
     repeat(operation, --num)
   }
}
  
module.exports = repeat

