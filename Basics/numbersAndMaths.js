const score = 98246;
console.log(score);  // 98246

const balance = new Number(2993);
console.log(balance);  // [Number: 2993]

console.log(typeof balance.toString());  // string
console.log(balance.toFixed(2));  // 2993.00

const num = 9273.3873;
console.log(num.toPrecision(3));  // 9.27e+3

const num1 = 1000000;
console.log(num1.toLocaleString());  // 1,000,000
console.log(num1.toLocaleString('en-IN'));  // 10,00,000

const maxNum = Number.MAX_VALUE;
const minNum = Number.MIN_VALUE;

console.log(`${maxNum} ${minNum}`);   // 1.7976931348623157e+308 5e-324


// ************************ Math Library *************************************************

console.log(Math.abs(-4));  // 4
console.log(Math.round(4.3));  // 4
console.log(Math.round(4.5));  // 5
console.log(Math.ceil(4.2));   // 5
console.log(Math.floor(4.2));  // 4
console.log(Math.min(3, 5, 1));  // 1

console.log(Math.random());  // Value b/w 0-1
console.log((Math.random() * 10) + 1);  // Value b/w 1 - 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // value b/w 10 - 20
