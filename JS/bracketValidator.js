// Bracket Validator: Write a function that tells us whether or not an input
// string's openers and closers are properly nested.
// O(n) time (one iteration through the string), and O(n) space (in the worst
// case, all of our characters are openers, so we push them all onto the stack).

function isValid (code) {
  var openersToClosers = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };

  var openers = new Set([ '(', '[', '{' ]);
  var closers = new Set([ ')', ']', '}' ]);
  openersStack = [];

  for (var i = 0; i < code.length; i++) {
    var char = code.charAt(i);

    if (openers.has(char)) {
      openersStack.push(char);

    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;

      } else {
        var lastUnclosedOpener = openersStack.pop();

        // if closer doesn't match most recent opener
        if(openersToClosers[lastUnclosedOpener] !== char) {
          return false;
        };
      }
    }
  }
  return openersStack.length === 0;
};

var validate = "{[]()}";
console.log(isValid(validate));  // true
