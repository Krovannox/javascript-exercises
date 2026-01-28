const add = function(numA, numB) {
	return numA + numB;
};

const subtract = function(numA, numB) {
	return numA - numB;
};

const sum = function(nums) {
	return nums.reduce((total, number) => total + number, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, number) => total * number, 1);
};

const power = function(numA, numB) {
	return numA ** numB;
};

const factorial = function(num) {
	let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
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
