"use strict"; //treat all JS code as newer version

// alert("hello"); it is not working when we use nodejs

// Datatypes: two types

// A. Primitive: they are call by value
// 1. number => 2^53
// 2. bigint
// 3. string
// 4. boolean => true/false
// 5. null => standalone value, it is a object type
// 6. undefined
// 7. symbol => for uniqueness

console.log(typeof null);  // object
console.log(typeof undefined);   //undefined


const id = Symbol('123');
console.log(id, typeof id);  // Sysmbol(123)  symbol

const id1 = Symbol('123');
console.log(id === id1);  // false

const bigNumber = 12937912389083978n;
const number = 12937912389083978;
console.log(bigNumber, typeof bigNumber);  // 12937912389083978 bigint
console.log(number, typeof number);  // 12937912389083978 number

// non-primitive / reference type: call by reference
// 1. array
// 2. object
// 3. function

const heros = ['hero1', 'hero2'];
const obj = {
    name: "pankaj",
    occupation: "SDE"
}

const myFun = function() {
    console.log("Hello");
}
myFun();
