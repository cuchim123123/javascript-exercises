const palindromes = function (str) {
    return str.trim().split("").filter(ch => isAlphabetical(ch)).join("").toLowerCase() === str.trim().split("").filter(ch =>isAlphabetical(ch)).reverse().join("").toLowerCase();
};

function isAlphabetical(ch){
    return ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789").includes(ch);
}
// Do not edit below this line
module.exports = palindromes;
