// Write a function that, given a sentence along with the position
// of an opening parenthesis, finds corresponding closing parenthesis.
// O(n) time, where n is the number of chars in the string. O(1) space.

function getClosingParen (sentence, openingParenIndex) {
  var openNestedParens = 0;

  for (var position = openingParenIndex + 1; position < sentence.length; position++) {
    var char = sentence[position];

    if (char === '(' ) {
      openNestedParens += 1;

    } else if (char === ')' ) {
      if (openNestedParens === 0) {
        return position;

      } else {
        openNestedParens -= 1;
      }
    }
  }
  throw new Error('No closing parenthesis :(' );
}

var str = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
console.log(getClosingParen(str, 10));
