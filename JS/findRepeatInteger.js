// Write a function which finds an integer that appears more than once in our array.
// O(1) space and O(n lg n) time.

function findRepeat (theArray) {
  var floor = 1;
  var ceiling = theArray.length - 1;

  while (floor < ceiling) {
    var midpoint = Math.floor(floor + ((ceiling - floor) / 2));
    var lowerRangeFloor = floor;
    var lowerRangeCeiling = midpoint;
    var upperRangeFloor = midpoint + 1;
    var upperRangeCeiling = ceiling;
    var possibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;
    var itemsInLowerRange = 0;

    theArray.forEach(function (item) {
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }
    });

    if (itemsInLowerRange > possibleIntegersInLowerRange) {
      // there must be a duplicate in lower range
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;

    } else {
      // there must be a duplicate in upper range
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }
  // floor and ceiling have converged, found a number that repeats
  return floor;
};

console.log(findRepeat([3, 7, 18, 22, 23, 7, 83, 92, 22]));
