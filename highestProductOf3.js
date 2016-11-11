// Given an array of integers, find the highest product you can get from three of the integers.
// The input array will always have at least three integers. This used the greedy algorithm approach.
// Complexity is O(n) time and O(1) additional space.

function highestProductOf3 (arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error('less than 3 items');
  }

  var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  var lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  var lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (var i = 2; i < arrayOfInts.length; i++) {
    var current = arrayOfInts[i];

    highestProductOf3 = Math.max(highestProductOf3, current * highestProductOf2,
                                     current * lowestProductOf2);
    highestProductOf2 = Math.max(highestProductOf2, current * highest,
                                     current * lowest);
    lowestProductOf2 = Math.min(lowestProductOf2, current * highest,
                                    current * lowest);
    highest = Math.max(highest, current);
        lowest = Math.min(lowest, current);
  }
  return highestProductOf3;
};

console.log(highestProductOf3([1, 10, -5, 1, -100]));
