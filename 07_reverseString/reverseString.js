const reverseString = function(phrase) {
    return phrase.split('').reverse().join('');
};

reverseString('hello there'); // returns 'ereht olleh'

// Do not edit below this line
module.exports = reverseString;
