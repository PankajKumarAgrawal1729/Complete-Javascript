const userEmail = "email@gmail.com";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Not getting");
}

// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Nullish Coalescing Operator(??): null, undefined

let val1;
val1 = 5 ?? 10;  // 5
val1 = null ?? 10;  // 10
val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 15; //10

console.log(val1); 


// Terniary Operator

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than or equals to 80") : console.log("More than 80");