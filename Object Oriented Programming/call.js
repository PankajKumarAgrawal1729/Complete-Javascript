function setUserName(username){
    console.log("called");
    this.username = username;
}

function createUser(username, email, password) {
    this.email = email;
    this.password = password;
    setUserName.call(this, username);
}

const user1 = new createUser("user1", "user1@fb.com", "123");
console.log(user1);