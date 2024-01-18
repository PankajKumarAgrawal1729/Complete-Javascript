class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("teacher1", "teacher1@example.com", "4321");
// access of parent class methods and variable also
teacher1.addCourse();
teacher1.logMe();

const user1 = new User("user1");
// only access of its method and variable
user1.logMe();