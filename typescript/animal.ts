class Animal {

  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {

  bark() {
    console.log(`${this.name} szczeka`);
  }
}

const dog = new Dog("Reks");

dog.bark();

// ❌ błąd
// console.log(dog.name)