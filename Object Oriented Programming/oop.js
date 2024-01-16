// object literal(literally an object)
const user = {
    username: "pankaj",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log("Get users detailed");
    }
}

console.log(user["username"]);
user.getUserDetails();


// constructor functions ('new' Keyword)

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this;  it is implicitly define
}

const user1 = new User("user1", 2, true);
const user2 = new User("User2", 4, false);
console.log(user1);
console.log(user2);
user1.greetings();
user2.greetings();
