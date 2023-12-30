let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("in if block: ", a);
}
console.log(a);
// console.log(b);  out of scope
// console.log(c);

function one() {
    const username = "pankaj";

    function two() {
        const website = "github";
        console.log(username);
    }
    // console.log(website);  // error
    two();
}
one();

if(true){
    const username = "Pankaj";
    if(username === "Pankaj"){
        const website = "linkedin";
        console.log(username, website);
    }
    // console.log(website);  // out of scope
}
// console.log(username);  // out of scope


// 
console.log("before declare addOne: ", addOne(5));   // before declare addOne:  6
function addOne(num){
    return num + 1;
}
console.log("after declare addOne: ", addOne(5));    // after declare addOne:  6

// console.log("before declare addTwo: ", addTwo(5));   // error
const addTwo = function (num){   
    return num + 2;
}
console.log("after declare addTwo: ", addTwo(5));   // after declare addTwo:  7