let sum = 0
let count = 0

for (let i = 2; count < 30; i++) {
    if (i == 2) {
        sum += i
        count++
        continue
    }

    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break
        }
    }

    if (isPrime) {
        sum += i
        count++
    }
}

console.log(sum)
