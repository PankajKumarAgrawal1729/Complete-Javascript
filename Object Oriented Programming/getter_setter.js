class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return `${this._email.toUpperCase()}`;
    }

    set email(email) {
        this._email = email;
    }

    get password() {
        return `${this._password.toUpperCase()}kjads`;
    }

    set password(password) {
        this._password = password;
    }
}

const user = new User("user@example.com", "jdndn");
console.log(user.password);