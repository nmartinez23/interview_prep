// Write a function that, given an amount of money and an array of coin denominations
// computes the number of ways to make amount of money with coins of the available denominations.
// Using a bottom-up dynamic algorithm and complexity O(n*m) time and O(n) additional space,
// where n is the amount of money and m is the number of potential denominations.

function changePossibilities (amount, denominations) {

  // initialize array of zeros up to amount length
  var waysOfDoingNcents = [];

  for (var i = 0; i <= amount; i++) {
    waysOfDoingNcents[i] = 0;
  }
  waysOfDoingNcents[0] = 1;

  for (var j = 0; j < denominations.length; j++) {
    var coin = denominations[j];

    for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
      var higherAmountRemainder = higherAmount - coin;
      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
    }
  }

  return waysOfDoingNcents[amount];
};

console.log(changePossibilities(5, [1,3,5]));
