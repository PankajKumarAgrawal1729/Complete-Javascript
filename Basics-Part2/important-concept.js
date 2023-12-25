// Function Statement
a();   // it will work correctly 
function a() {
    console.log("A called");
}
a();

// Function Expression 
// b();  it will through the error, on 1st phase b is undefined
var b = function () {
    console.log("b called");
}  // example f anonymous fn also
b();

// The difference b/w these is hoising.

// Anonymous Function: function without name

// Named Function Expression 
var x = function y() {
    console.log("Named function");
}

// y(); it will through error if we called it becz y is a local variable
x();

// Difference between Parameters & Arguments

function fn(param1, param2) {
    console.log(param1, param2);
}
let arg1 = 1;
let arg2 = 2;
fn(arg1, arg2);

// First class Functions/citizen : the ability of taking fn as argument and reutrning fn from function is called 1st class fn
function fn1(fn2) {
    console.log(fn2);
    return function fn3() {

    }
}
console.log(fn1(function () {

}));

