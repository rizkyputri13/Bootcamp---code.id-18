const number = [1,2,3,4]
const number1 = [5,6,7,8]

console.log(...number);
console.log(number.concat(number1));
const concat = [...number,...number1,12,13,14]
console.log(concat);
console.log(...concat);