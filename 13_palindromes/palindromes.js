const palindromes = function (str) {
    let strArr = str
        .trim()
        .toLowerCase()
        .split("")
        .filter(ch => isAlphabetical(ch))
        ;
    return strArr.join("") === strArr.reverse().join("");
};

function isAlphabetical(ch){
    return ("abcdefghijklmnopqrstuvwxyz0123456789").includes(ch.toLowerCase());
}



// Do not edit below this line
module.exports = palindromes;
