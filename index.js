// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says meow!`;
  }
}
let newCat = new Cat("Sasha", "female");

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}
// let bird1 = new Bird("Pablo", "male");
// let bird2 = new Bird("Mable", "female");
let myBird = new Bird("Pablo", "male");

// For an instance of Cat, speak returns "name says meow!",
// For an instance of Dog, speak returns "name says woof!"
// For an instance of Bird, speak returns conditional output. If the instance of Bird is male, speak
// returns "It's me! name, the parrot!". If it is not male, speak returns "name says squawk!".
