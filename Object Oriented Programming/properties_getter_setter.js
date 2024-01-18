function User(email, password) {
    this._email = email;
    this._password = password;

    // getter and setter before ES6
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });
    Object.defineProperty(this, 'password', {
        get: function () {
            return `${this._password.toUpperCase()}nkd`;
        },
        set: function (value) {
            this._password = value;
        }
    })
}

const userold = new User("old@user.com", "qwdqwd");
console.log(userold.email);