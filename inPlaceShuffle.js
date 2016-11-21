// Write a function for doing an in-place shuffle of an array.
// O(n) time and O(1)O(1) space.

function getRandom (floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
};

function shuffle(theArray) {
  if (theArray.length <= 1) return;

  for (var index = 0; index < theArray.length; index++) {
    var randomChoiceIndex = getRandom(index, theArray.length - 1);

    // place random choice in the spot by swapping
    var valueAtIndex = theArray[index];
    theArray[index] = theArray[randomChoiceIndex];
    theArray[randomChoiceIndex] = valueAtIndex;
  };
}

shuffle([3, 8, 11, 28]);
