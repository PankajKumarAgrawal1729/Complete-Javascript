let score = "33abx";

console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); //NaN

let val = null;
let changeVal = Number(val);
console.log(typeof changeVal); // number
console.log(changeVal); // 0

let val1 = undefined;
let changeVal1 = Number(val1);
console.log(typeof changeVal1); // number
console.log(changeVal1); // NaN

let val2 = true;
let changeVal2 = Number(val2);
console.log(typeof changeVal2); // number
console.log(changeVal2); // 1

// "33" => 33
// "33abc"  => NaN
// true  => 1; false => 0

let isLoggedin = 1;

let booleanIsLoggedIn = Boolean(isLoggedin);
console.log(booleanIsLoggedIn); // true

let val3 = "";

let booleanVal3 = Boolean(val3);
console.log(booleanVal3); // false

let val4 = "Pankaj";

let booleanVal4 = Boolean(val4);
console.log(booleanVal4); // true

// 1 => true; 0 => false
// "" => false
// "pankaj" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);  // 33
console.log(typeof stringNumber);   // string
