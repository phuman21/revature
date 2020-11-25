
class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} just barked`);
    }
}

class GermanShepard extends Dog {
    constructor(name, age) {
        super(name, age, "German Shepard"); 
    }
}

let dog2 = new Dog("Spot", 1, "Lab");
dog2.bark();