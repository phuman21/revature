
var dog = (function() {
    var dogCounter = 0;

    var newDog = new Object();
    newDog.age = 5;
    newDog.legs = 4;
    newDog.name = "Doggie";

    newDog.bark = function() {
        ++dogCounter;
        console.log(`${newDog.name} barked! Count: ${dogCounter}`);
    }

    return newDog;
})

function Dog(age, legs, name) {
    this.age = age;
    this.legs = legs;
    this.name = name;

    var dogCounter = 0;

    this.bark = function() {
        ++dogCounter;
        console.log(`${newDog.name} barked! Count: ${dogCounter}`);
    }
}