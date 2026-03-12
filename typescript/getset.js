var User = /** @class */ (function () {
    function User() {
        this._age = 0;
    }
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Wiek nie może być ujemny");
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User();
user.age = 25;
console.log(user.age);
