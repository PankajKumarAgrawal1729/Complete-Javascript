console.log(2 > 1);  // true
console.log(2 >= 1);  // true
console.log(2 < 1);  // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true


console.log("2" > 1);  // true
console.log("02" > 1); // true

console.log("null check");
console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// the reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log("undefined check");
console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0);  // false
console.log(undefined < 0);  // false


console.log("== and === check");
console.log("2" == 2);  // true,  it comapre value only after comparison
console.log("2" === 2); // false, it comapre value and address
console.log(2 === 2); // true, it comapre value and address