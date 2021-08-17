// this program tries to find the next prime fibonacci number.
// i.e. - given a input n, the `nxtPrmFib` function returns a number which is both prime and fibonacci and is greater than the input number.

// the program below is complete and works as detailed in the requirements.
// the task here is to:

// 1. rationalize and understand the code as best you can.
// 2. open a PR to improve the code as you see fit.

// Converting to an Angular app or typescript is not considered a necessity here.
// We're mostly interested in understanding how engineers can critique the code & suggest improvements.

var ispnum = function(num) {
    for(var i = 2; i < num; i++)
        if  (num % i === 0) return false;
    return num > 1;
};

const fibonacci = (num) => {
    if (num <= 1)return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

function nxtPrmFib(number) {
    let r = 0;
    let l = 1;
    while (true) {
        var fib = fibonacci(l);
        console.log('fib', fib, number);
        if (fib > number) {
            if (ispnum(fib)) {
                r = fib;
                break;
            } else {
                l = l + 1;
                console.warn('bumping to ', fib);
            }
        } else {
            l = l + 1;
            console.warn('bumping to', fib);
        }
    }
    console.warn('Next prime fib ', r);
}

//nxtPrmFib(20);

// We should use CamelCase for naming and do not make shortages that are not clear
// We should use arrow functions where it is possible
// Create intermediate variable for clarification
const isPrimeNumber = (num) => {
    let result = num > 1;

    // In this way complexity of algorithm would be O(1) not O(n) because we have the same number of iterations every time
    for (let i = 2; i < 10; i++) {
        if  (num % i === 0 && i !== num) {
            result = false;
        }
    }

    return result;
};

// Use ternary operator where it is possible
const getFibonacciNumber = (num) => {
    // It`s faster than recursion and works fast with big numbers
    // a, b, c - fibonacci numbers
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Do not make shortages that are not clear
function nextPrimeFibonacci(number) {
// Name of variables should describe what they do
    let result = 0;
    let iterationCount = 1;

    while (true) {
        // Don`t use var
        const fib = getFibonacciNumber(iterationCount);
        //Don`t duplicate code
        if (fib > number && isPrimeNumber(fib)) {
            result = fib;
            break;
        } else {
            iterationCount = iterationCount + 1;
            console.warn('bumping to ', fib);
        }
    }
    console.warn('Next prime fib ', result);
}

nextPrimeFibonacci(20);

