const sumAll = function(numberA, numberB) {
    if (numberA < 0 || numberB < 0 || !Number.isInteger(numberA) || !Number.isInteger(numberB)) {
        return 'ERROR';
    }
    
    let start = Math.min(numberA, numberB);
    let end = Math.max(numberA, numberB);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
