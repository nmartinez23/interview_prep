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



function getSecondLargest(nums) {
  let sorted = nums.sort();
  let largest = sorted.length - 1;
  
  for (let i = largest; i >= 0; i--) {
    if (sorted[i] < sorted[largest]) {
      return sorted[i];
      i--;      
    }
  }
}

getSecondLargest([2,1,3,4])
