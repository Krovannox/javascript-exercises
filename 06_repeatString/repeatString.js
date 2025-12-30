const repeatString = function(word, times) {
    let newString = '';

    if (times < 0) {
        return console.log('ERROR');
    } else {
        for (let i = times; i > 0; i--) {
        newString = newString + word;
        }

        return newString;
    }

    repeatString('hey', 3);
};

// Do not edit below this line
module.exports = repeatString;
