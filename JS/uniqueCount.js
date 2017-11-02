// Write an equation that counts the number of unique letters in a string
function uniqueLetters(str) {
  var unique = {};
  
  for (var i = 0; i < str.length; i++) {
    if (!unique.hasOwnProperty(str[i])) {
      unique[str[i]] = 1;
    } else {
      unique[str[i]] += 1;
    }
  }
  
  return unique;
}

uniqueLetters('hello');

// Answer: { h: 1, e: 1, l: 2, o: 1 }
