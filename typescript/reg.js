var Validators;
(function (Validators) {
    // prywatne!
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (s) {
            return emailRegex.test(s);
        };
        return EmailValidator;
    }());
    Validators.EmailValidator = EmailValidator;
    var LengthValidator = /** @class */ (function () {
        function LengthValidator(min, max) {
            this.min = min;
            this.max = max;
        }
        LengthValidator.prototype.isValid = function (s) {
            return s.length >= this.min && s.length <= this.max;
        };
        return LengthValidator;
    }());
    Validators.LengthValidator = LengthValidator;
})(Validators || (Validators = {}));
var email = new Validators.EmailValidator();
var length2 = new Validators.LengthValidator(3, 20);
console.log(email.isValid("tomasz@alx.pl"));
console.log(email.isValid("alx.pl"));
console.log(email.isValid("niemail"));
