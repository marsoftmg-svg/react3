

class User {

  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Wiek nie może być ujemny");
    }
    this._age = value;
  }
}

const user = new User();

user.age = 25;

console.log(user.age);
