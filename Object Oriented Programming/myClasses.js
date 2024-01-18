// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    getUserName() {
        return `${this.username.toUpperCase()}`;
    }
}

const user1 = new User("user1", "user1@gmail.com", "123");
console.log(user1.encryptPassword());
console.log(user1.getUserName());

// behind the scene

// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`;
// }

// User.prototype.getUserName = function() {
//     return `${this.username.toUpperCase()}`;
// }

// const user2 = new User("user2", "user2@gmail.com", "321");
// console.log(user2.encryptPassword());
// console.log(user2.getUserName());