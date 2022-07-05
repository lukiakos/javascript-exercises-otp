const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
 return numbers.reduce((sum, currValue) => sum + currValue, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((sum, currValue) => sum * currValue, 1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }
  let total = 1;
  while (a > 0) {
    total += total * (a-1);
    a -= 1;
  }
  return total;
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
