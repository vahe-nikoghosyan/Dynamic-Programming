const {performance} = require('perf_hooks');
// const gridTraveler = (m, n) => {
//     if (m === 1 && n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
// }

// m, n
// height:
// O(2 n+m) time
// O(n+m) space
// gridTraveler(a + b) = gridTraveler(b + a)

// const t0 = performance.now();


const gridTraveler = (m, n, memo = {}) => {
    const key = m + "," + n
    // are the args in the memo
    if (key in memo) return memo[key]
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    // if (m - 1 + "," + n in memo) {} ??

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}

// m = 42
// n = 3

// key = 423 // wrong!!!
// key = 42,3 // right

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18)) // Call to doSomething took 6.913984000682831 milliseconds.

// const t1 = performance.now();
// console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);