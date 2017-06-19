function isPrime(number) {
    var isprime = !(isNaN(number) || !isFinite(number) || number < 2),
        factor = number - 1;
    while (factor >= 2 && isprime) {
        isprime = number % factor;
        factor = factor - 1;
    }
    return isprime;
}
function isPrimeSmarter(number) {
    var half = parseInt(number / 2);
    var factor = 2;
    while (factor <= half && number % factor != 0) {
        factor = factor + 1;
    }
    return factor > half;
}
