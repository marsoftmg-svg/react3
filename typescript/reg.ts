namespace Validators{
    // prywatne!
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // publiczny!
    export interface StringValidator {
        isValid(s: string): boolean;
    }

    export class EmailValidator implements StringValidator {
        isValid(s: string): boolean {
            return emailRegex.test(s);
        }
    }

    export class LengthValidator implements StringValidator {
        constructor(private min: number, private max: number) {}
        isValid(s: string): boolean {
            return s.length >= this.min && s.length <= this.max;
        }
    }
}

const email = new Validators.EmailValidator();
const length2 = new Validators.LengthValidator(3,20);
console.log(email.isValid("tomasz@alx.pl"))
console.log(email.isValid("alx.pl"))
console.log(email.isValid("niemail"))

