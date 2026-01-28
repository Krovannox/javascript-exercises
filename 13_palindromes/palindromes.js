const palindromes = function (string) {
    let allowedCharacters = "abcdefghijklmnñopqrstuvwxyz1234567890";

    let cleanString = string.toLowerCase()
                            .split("")
                            .filter(character => allowedCharacters.includes(character))
                            .join("");

    let reverseString = cleanString.split("")
                                    .reverse()
                                    .join("");

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
