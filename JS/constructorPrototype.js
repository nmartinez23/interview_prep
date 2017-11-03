// Create a Person constructor class that takes a name and then
// create a greeting prototype method that takes another person’s
// name and return a string greeting that person.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function(otherName) {
  return "Hi " + otherName + ", my name is " + this.name;
}

var nick = new Person('Nick');
var nessa = nick.greet('Nessa');
console.log(nessa);
