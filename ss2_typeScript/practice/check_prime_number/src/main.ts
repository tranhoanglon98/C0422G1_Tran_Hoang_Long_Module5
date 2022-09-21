function checkPrimeNumber(number: number) {
    let isPrime = true;
    if (number == 2) {
        return isPrime
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false
                break
            }
        }
        return isPrime
    }
}

let arr = [1, 2, 5, 6, 7, 8, 9, 11]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (checkPrimeNumber(arr[i])) {
        sum += arr[i]
        console.log(arr[i])
    }
}

console.log(`sun = ${sum}`)