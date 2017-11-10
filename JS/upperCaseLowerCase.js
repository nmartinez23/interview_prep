// Write a function that accepts a string, and returns the same string with all even indexed
// characters in each word upper cased, and all odd indexed characters in each word lower cased.

function toWeirdCase(string){
  var arr = [];

  for(var i = 0; i < string.length; i++) {
    arr.push(i % 2 == 0 ? string[i].toUpperCase() : string[i].toLowerCase());
  }

  return arr.join('');
}


function weirdCase(str) {
  let result = [];
  
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i].toLowerCase());
    }
  }
  
  return result.join('');
}

toWeirdCase('hello there');
