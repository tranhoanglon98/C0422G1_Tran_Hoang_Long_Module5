let fibonacci = (index: number): number => {
    if (index == 1) {
        return 0
    } else if (index == 2) {
        return 1
    } else {
        return fibonacci(index - 1) + fibonacci(index - 2)
    }
}
let sum = 0;
for (let i = 1; i <= 10; i++) {
    let fibo = fibonacci(i)
    console.log(fibo)
    sum += fibo
}
console.log(`sum = ${sum}`)