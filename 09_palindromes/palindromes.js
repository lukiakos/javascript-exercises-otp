const palindromes = function (string) {
    let cleanString = string.toLowerCase().replaceAll(" ", "").replaceAll(",", "").replaceAll(".","").replaceAll("!","")
    let reverseString = cleanString.split("").reverse().join("");
    return cleanString === reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
