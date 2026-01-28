const fibonacci = function(num) {
    let intNum = parseInt(num);
    let prevA = 1;
    let prevB = 0;

    if (intNum === 0) return 0;
    if (intNum < 0) return "OOPS";

    for (let i = 2; i <= intNum; i++) {
        let current = prevA + prevB;
        prevB = prevA;
        prevA = current;
    }

    return prevA;
};

// Do not edit below this line
module.exports = fibonacci;
