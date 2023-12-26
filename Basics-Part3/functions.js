function sayMyName() {
    console.log("Pankaj");
}

sayMyName();

function addTwoNumber(num1 = 0, num2 = 0) {
    return num1 + num2;
}

const result = addTwoNumber(3, 5);
console.log(result);

function loginUserMessage(usename) {
    if (usename) {
        return `${usename} just logged in`;
    }
    return "Please Enter the Username.";
}

console.log(loginUserMessage("Pankaj"));
console.log(loginUserMessage());

function calculateCartPrice(...nums) {  // rest/spread operator
    return nums;
}

console.log(calculateCartPrice(200, 700, 65, 87));

const user = {
    username: "pankaj",
    price: 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "PG",
    price: 91
});

const arr = [23, 293, 1, 3];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(arr));