// Write a function fib() that a takes an integer n and returns
// the nth fibonacci number. O(n) time and O(1)O(1) space.

function fibIterative (n) {
  // edge cases:
  if (n < 0) {
    throw new Error('Negative index cannot be in series');

  } else if (n === 0 || n === 1) {
        return n;
    };

  var prevPrev = 0; // 0th fibonacci
  var prev = 1; // 1st fibonacci
  var current; // declare current

  for (var x = 1; x < n; x++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
};

console.log(fibIterative(7));


// Recursive solution below

//   function Fibber() {
//     this.memo = {};
// }

// Fibber.prototype.fib = function(n) {

//     // edge case: negative index
//     if (n < 0) {
//         throw new Error('Index was negative. No such thing as a negative index in a series.');
//     }

//     // base case: 0 or 1
//     else if (n === 0 || n === 1) {
//         return n;
//     }

//     // see if we've already calculated this
//     if (this.memo.hasOwnProperty(n)) {
//         return this.memo[n];
//     }

//     var result = this.fib(n-1) + this.fib(n-2);

//     // memoize
//     this.memo[n] = result;

//     return result;
// };

// var fibby = new Fibber();
// fibby.fib(7);
