function multipleBy5(num) {
    return 5 * num;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));  // 25
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype);  // {}

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score} of ${this.username}`);
}

const js = new createUser("JS", 25);
const ts = new createUser("TS", 23);

js.increment();
js.printMe();

ts.increment();
ts.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/