const reverseString = function(originalString) {
    const stringArray = originalString.split("");
    const stringArrayLength = stringArray.length - 1;
    let reverseStringArray = [];

    for (let i = stringArrayLength; i > -1; i--) {
        reverseStringArray.push(stringArray[i]);
    }

    return reverseStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
