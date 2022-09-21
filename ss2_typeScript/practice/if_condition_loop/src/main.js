var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    var isPrime = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        sum += i;
        count++;
        console.log(i);
    }
}
