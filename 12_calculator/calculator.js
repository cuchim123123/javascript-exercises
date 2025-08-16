const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(num) {
  return num.reduce((acc, cur)=> acc+(+cur), 0);
};

const multiply = function(num) {
  return num.reduce((acc, cur)=> acc*(+cur), num.length!==0 ? 1:0);

};

const power = function(a, b) {
  return a**b
};

const factorial = function(a) {
	if(a === 0) return 1;
  else return a*factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
