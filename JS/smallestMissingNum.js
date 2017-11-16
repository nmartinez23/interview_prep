// Given an array of numbers, write a function to find the smallest non-negative integer that is not in the array. 
// The maximum possible number in the array is 2^31 - 1.
Example [5, 3, 4, 0, 1] -> 2
Example [0, 1, 2, 3, 4] -> 5

function smallestMissingNum(arr) {
  let numHash = {};
  let number = 0;
  const MAX_INT = Math.pow(2, 31) - 1;
  
  for (let i = 0; i < arr.length; i++) {
    // object integer keys automatically get sorted in ascending order
    numHash[arr[i]] = true;
  }
  
  while (number <= MAX_INT) {
    if (!numHash[number]) {
      return number;
    }
    number++;
  }
  
  throw new Error('Didn't find a missing number less than MAX_INT')
}
