// Count the number of monkeys at the zoo. Given the number (n), populate an
// array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  var monkeys = [];

  for(var i = 1; i <= n; i++) {
    monkeys.push(i);
  };

  return monkeys;
};

var result = monkeyCount(8);
console.log(result);
