// Write a function that accepts a string, and returns the same string with all even indexed
// characters in each word upper cased, and all odd indexed characters in each word lower cased.

function toWeirdCase(string){
  var arr = [];

  for(var i = 0; i < string.length; i++) {
    arr.push(i % 2 == 0 ? string[i].toUpperCase() : string[i].toLowerCase());
    if(string[i] === " ") {
      i = 0;
    }
  }

  return arr.join('');
}

var result = toWeirdCase('hello there');
console.log(result);
