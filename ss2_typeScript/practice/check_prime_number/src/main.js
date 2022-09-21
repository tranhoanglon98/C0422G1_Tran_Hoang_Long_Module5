function checkPrimeNumber(number) {
    var isPrime = true;
    if (number == 2) {
        return isPrime;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }
}
var arr = [1, 2, 5, 6, 7, 8, 9, 11];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (checkPrimeNumber(arr[i])) {
        sum += arr[i];
        console.log(arr[i]);
    }
}
console.log("sun = ".concat(sum));
