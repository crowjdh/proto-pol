function person(fullName, age) {
    this.age = age;
    this.fullName = fullName;
    this.details = function() {
        return this.fullName + " has age: " + this.age;
    }
}

console.log(person.prototype.constructor);
console.log(person.prototype.constructor.constructor);
console.log(person.prototype.constructor.constructor('return 1'));
console.log(person.prototype.constructor.constructor('return 1')());
