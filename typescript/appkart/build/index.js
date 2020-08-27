"use strict";
var User = /** @class */ (function () {
    function User() {
        this.users = [];
    }
    User.prototype.addUser = function (fullname, email, password) {
        this.users.push({
            fullname: fullname,
            email: email,
            password: password,
        });
        console.log("this", this.users);
    };
    Object.defineProperty(User.prototype, "length", {
        get: function () {
            return this.users.length;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var s = new User();
s.addUser("pradeep kumar", "abc@gmail.com", "abc123");
s.addUser("pradeep kumar", "abc@gmail.com", "abc123");
console.log("s", s);
