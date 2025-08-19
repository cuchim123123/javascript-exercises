const fibonacci = function(num) {
    if(num<0) return 'OOPS';

    let ficArr = [0, 1];
    if(num<2) return ficArr[num];
    for(let i=2; i<=num; i++){
        ficArr[i] = ficArr[i-1] +ficArr[i-2];
    }
    return ficArr[num];
};

// Do not edit below this line
module.exports = fibonacci;
