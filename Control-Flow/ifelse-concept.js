// if
// Syntax :
// if (condition) {

// }

const isUserLoggedin = true;
if (isUserLoggedin) {
    console.log("Logged in");
}

// if-else
let a = 20;
let b = 30;
if (a >= b) {
    console.log("a is greater");
} else {
    console.log("b is greater");
}

const balance = 1000;
if (balance > 500)
    console.log("greater");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else {
    console.log("Enough balance");
}

const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (isUserLoggedin && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}