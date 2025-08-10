const removeFromArray = function(array, ...rest ) {
    return array.filter(element => {
        return !rest.includes(element)
    });
};

// Do not edit below this line
module.exports = removeFromArray;
