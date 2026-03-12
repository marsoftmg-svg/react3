interface User {
    name: string;
    age: number;
    gender? :string;
    canDrive(): any;
}

class Person implements User {
    name: string
    age: number
    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

    canDrive(){     
    console.log("user is ",this.name);

    if (this.age >= 16) {
        console.log("allow drive");
    } else {
        console.log("do not allow to drive");
    }
}
}

const john: User = new Person("jan",15);
john.canDrive();