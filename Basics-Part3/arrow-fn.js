const user = {
    username: "Pankaj",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);   // it refer to the current context
    }
}

// user.welcomeMessage();
// user.username = "Ram";
// user.welcomeMessage();

console.log(this);  // {} in node it refer to empty object, and in browser it refer to window


function fun() {
    let name = "Pankaj";
    console.log(this.name);  // undefined
}

fun();


const fun1 = function () {
    let name = "Pankaj";
    console.log(this.name);  // undefined
}

fun1();

const fun2 = () => {
    let name = "Pankaj";
    console.log(this.name);  // undefined
}

fun2();


// const addTwo = (a, b) => {
//     return a + b;
// }

const addTwo = (a, b) => (a + b);  // implicite return
console.log(addTwo(34, 5));

