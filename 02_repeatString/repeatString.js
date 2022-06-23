const repeatString = function(string,num) {
    i = 1
    text = ''
    if (num >= 0) {
        while (i <= num) {
        text += string
        i += 1
        }
    } else {
        return 'ERROR'
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
