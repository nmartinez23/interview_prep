// Return the second largest number in the array.


function getSecondLargest(nums) {
  let sorted = nums.sort(function(a, b) {
    return a - b;
  });

  for(let i = sorted.length - 1; i >= 0; i--) {
    if(sorted[i] < sorted[sorted.length - 1]) {
      return sorted[i];
      i--;
    }
  }
}
