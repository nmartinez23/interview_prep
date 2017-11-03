// Create a function that removes the first and last character of the passed in string.

function removeChar(str) {
  var result = str.split('');
  var removed = [];
  removed.push(result.pop());
  removed.push(result.shift());

  return result.join('');
};

console.log(removeChar('hello'));
