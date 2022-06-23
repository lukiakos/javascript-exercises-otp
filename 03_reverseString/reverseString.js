const reverseString = function(string) {
    letters = []
    output = ''
    for (let i = 0; i < string.length; i++) {
        letters.push(string[i])
    }
    for (let i = string.length - 1; i >= 0; i--){
        output += letters[i]
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
