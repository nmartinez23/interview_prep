// Given an array of numbers, find the two numbers that add up to the sum closest to zero.
function findPair(array) {
  var lowestSum = Math.abs(array[0] + array[1]);
  var result = [];
  var sum;
  
  // Nested for loops will iterate through array to add up the sum of each 
  // possible pair of index values to find the sum closest to zero.
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      sum = Math.abs(array[i] + array[j]);
      
      if (sum < lowestSum) {
        result[0] = array[i];
        result[1] = array[j];
        lowestSum = sum;
      } 
    }
  }
  
  return result;
}

findPair([-40, 9, 11, -2, 40, 18]);
// Answer: [-40, 40]
