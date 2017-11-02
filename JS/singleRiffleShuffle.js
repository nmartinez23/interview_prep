// write a function to tell us if a full deck of cards is a
// single riffle of two other halves half1 and half2.
// O(n) time and O(1)O(1) additional space.

function isSingleRiffle (half1, half2, shuffledDeck) {
  var half1Index = 0;
  var half2Index = 0;
  var half1MaxIndex = half1.length - 1;
  var half2MaxIndex = half2.length - 1;

  for (var i = 0; i < shuffledDeck.length; i++) {
    var card = shuffledDeck[i];

    if (half1Index <= half1MaxIndex && card === half1[half1Index]) {
      half1Index++;

    } else if (half2Index <= half2MaxIndex && card === half2[half2Index]) {
      half2Index++;

    } else {
      return false;
    };
  }
  return true;
};

var firstHalf = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51];
var secondHalf = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52];
var shuffled = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];

console.log(isSingleRiffle(firstHalf, secondHalf, shuffled)); // true
