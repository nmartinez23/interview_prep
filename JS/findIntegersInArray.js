//Find two integers in a list that add up to another integer
function findPairs(numbers, sum) {
  var isInNumbers = [];
  for ( var i = 0; i < sum; i++ ) {
    isInNumbers.push(false);
  }
  for ( var i = 0; i < numbers.length; i++ ) {
    isInNumbers[numbers[i]] = true;
  }
  var pairs = [];
  var n = sum / 2;
  for ( var i = 0; i <= n; i++) {
    if ( isInNumbers[i] && isInNumbers[sum - i] ) {
      pairs.push([i, sum - i]);
    }
  }
  return pairs;
}
findPairs([1,2,3,4,5], 7);
// pairs = [[2,5], [3,4]]
