const sumAll = function(int1, int2) {
    let sum = 0;
    let smaller = int1>=int2 ? int2 : int1;
    let larger = int1>=int2 ? int1 : int2;
    if(!Number.isInteger(int1)|| !Number.isInteger(int2) || int1<0 || int2<0){
        return "ERROR";
    }
    
    return (smaller + larger) * (larger - smaller + 1)/2;
};

// Do not edit below this line
module.exports = sumAll;
