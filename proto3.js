const assert = require('assert').strict;

function person(fullName, age) {
    this.age = age;
    this.fullName = fullName;
}

var person1 = new person("Anirudh", 25);
var person2 = new person("Anand", 45);

// Using person1 object
person1.constructor.prototype.details = function() {
    return this.fullName + " has age: " + this.age;
}
/*
person1.__proto__.details = function() {
    return this.fullName + " has age: " + this.age;
}
*/

console.log(person1.details()); // prints "Anirudh has age: 25"
console.log(person2.details()); // prints "Anand has age: 45" :O

assert.equal(person1.constructor, person)
console.log(person1.constructor === person)
