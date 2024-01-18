class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }


    static createId() {
        return `123`;
    }
}

const user = new User("Pankaj");
// console.log(user.createId()); // we can't access of static methods

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
// console.log(iphone.createId());  // we can't access of static methods