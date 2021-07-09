const Parent = Base => class extends Base {
  run() {
    console.log("Running...")
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} can speak`;
  }

  eat() {
    return `${this.name} can eat`;
  }

  sleep() {
    return `${this.name} can sleep`;
  }

}


class Dog extends Parent(Animal) {
  constructor(name, bread) {
    super(name);
    this.bread = bread;
  }


  speak() {
    const x = super.speak();
    console.log('x', x)
  }
}


const d = new Dog("Juno", "Pamerian")