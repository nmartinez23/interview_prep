// Check if a given integer is in a sorted array. Since the array
// is already sorted, use binary search to divide and conquer.
// O(lg n) time and O(1) additional space.

function binarySearch(target, nums) {
  // floorIndex and ceilingIndex are walls with possible solutions
  // in between. floorIndex is the wall to the left of 0th index
  var floorIndex = -1;
  var ceilingIndex = nums.length;

  while (floorIndex + 1 < ceilingIndex) {
    var distance = ceilingIndex - floorIndex;
    var halfDistance = Math.floor(distance / 2);
    var guessIndex = floorIndex + halfDistance;
    var guessValue = nums[guessIndex];

    if (guessValue === target) return true;

    if (guessValue > target) {
      ceilingIndex = guessIndex;

    } else {
      floorIndex = guessIndex;
    }
  }
  return false;
};

console.log(binarySearch(7, [1, 3, 7, 8, 11, 18]));

