// object litral
const mySym = Symbol("key1");

const user = {
    name: "User1",
    age: 18,
    location: "India",
    email: "user1@gmail.com",
    [mySym]: "MY Symbol"
};

console.log(user.name);   // User1
console.log(user["email"]);  // user1@gmail.com
console.log(user[mySym]);  // MY Symbol

user.email = "user1.google.com";
console.log(user.email);  // user1.google.com

// Object.freeze(user);  // from now we can't change array
// user.email = "user1Mail.google.com";
// console.log(user.email);   // user1.google.com

user.greeting = function () {
    console.log("Hello");
}

user.greeting();   // Hello

user.greeting1 = function () {
    console.log(`Hi, ${this.name}`);
}
user.greeting1();   // Hi, User1


// Singleton  : using constructor

const webUser = new Object();
console.log(webUser);   // {}

webUser.id = "12jsa";
webUser.name = "Ram";
webUser.isLoggedin = true;

console.log(webUser);   // { id: '12jsa', name: 'Ram', isLoggedin: true }

const regularUser = {
    email: "ram@google.com",
    fullname: {
        userfullname: {
            firstname: "Ram",
            lastname: "Chandra"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);   // Ram

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = { obj1, obj2 };
console.log(obj3);   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);   // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj5 = { ...obj1, ...obj2 };
console.log(obj5);   // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        name: "user1"
    },
    {
        id: 2,
        name: "user2"
    }
];

console.log(users[1].name);  // user2

console.log(Object.keys(webUser));   // [ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(webUser)); // [ '12jsa', 'Ram', true ]

console.log(Object.entries(webUser));  // [ [ 'id', '12jsa' ], [ 'name', 'Ram' ], [ 'isLoggedin', true ] ]

console.log(webUser.hasOwnProperty("name"));   // true

// object de-structuring

const course = {
    name: "Course1",
    price: 999,
    courseInstructor: "Teacher1"
}

const { courseInstructor: instructor } = course
console.log(instructor);   // Teacher1
