const User = {
    _email: "object@example.com",
    _password: "dsadf",

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },

    get password() {
        return `${this._password.toUpperCase()}fssda`;
    },

    set password(value) {
        this._password = value;
    }
}

const tea = Object.create(User);
console.log(tea.email);