// fibbonaci 

// function fib(n) { ///// old
//     if (n <= 2) {
//         return 1;
//     }
//     else {
//         return fib(n-1) + fib(n-2);
//     }
// } 

// console.log(fib(100));

// best method with memoization, and recursion
const memoizedFib = memoizedFibbonaci();

// console.log(`index 1 of Fibbonaci is ${memoizedFib(1)}`);
// console.log(`index 4 of Fibbonaci is ${memoizedFib(4)}`);
console.log(`index 7 of Fibbonaci is ${memoizedFib(7)}`);
// console.log(`index 21 of Fibbonaci is ${memoizedFib(21)}`);

//**************************
function memoizedFibbonaci() {
    let fibbonaciCache = [0];
    return checkCacheOrCompute;

    // *************************
    function checkCacheOrCompute(n) {
        if (n in fibbonaciCache) {
            console.log(`fetching fibbonaciCache[${n}]:`)
            return fibbonaciCache[n];
        } else {
            console.log(`calling computeFibbonaci...`)
            return computeFibbonaci(n);
        }
    }
    // *************************
    function computeFibbonaci(n) {
        let term = n
        if (term <= 2) {
            fibbonaciCache[1] = 1;
            console.log("returned 1")
            return fibbonaciCache[1];
        } else {
            fibbonaciCache[n] = checkCacheOrCompute(n - 1) + checkCacheOrCompute(n - 2);
            return fibbonaciCache[n];
        }
    }
}

console.log("*******************");

// no memoization, sucks.
// Experiments below, inefficient method below, with no memoization, beware will loop for a long time.
const memoizedFib2 = memoizedFibbonaci2();

// console.log(`index 1 of Fibbonaci is ${memoizedFib(1)}`);
// console.log(`index 4 of Fibbonaci is ${memoizedFib(4)}`);
console.log(`index 7 of Fibbonaci is ${memoizedFib2(7)}`);
// console.log(`index 8 of Fibbonaci is ${memoizedFib(8)}`);

//**************************
function memoizedFibbonaci2() {
    // let fibbonaciCache = [0];
    return computeFibbonaci;

    // *************************
    function checkCacheOrCompute(n) {
        if (n in fibbonaciCache) {
            console.log(`fetching fibbonaciCache[${n}]:`)
            return fibbonaciCache[n];
        } else {
            console.log(`computing...`)
            return computeFibbonaci(n);
        }
    }
    // *************************
    function computeFibbonaci(n) {
        console.log("calling compute Fibbonaci...")
        // let term = n
        if (n <= 2) {
            // fibbonaciCache[1] = 1;
            console.log("returned 1")
            return 1;
        } else {
            return computeFibbonaci(n - 1) + computeFibbonaci(n - 2);
            // return fibbonaciCache[n];
        }
    }
}