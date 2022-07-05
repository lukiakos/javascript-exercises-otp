const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
    let fibonacciArr = [1,1];
    let i = 1;
    while (fibonacciArr.length <= num - 1) {
        let addCurrElement = fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i-1]);
        i += 1;
    }
    return fibonacciArr.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
