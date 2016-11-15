// Write a function for finding the index of the "rotation point,"
// which is the alphabetical beginning of the dictionary.
// O(lg n) time and O(1) space, just like binary search.

function findRotationPoint (words) {
  const firstWord = words[0];

  var floorIndex = 0;
  var ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {
    var guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

    // if guess comes after first word
    if (words[guessIndex] > firstWord) {
      floorIndex = guessIndex;

    } else {
      ceilingIndex = guessIndex;
    }

    // if floor and ceiling have converged, ceiling is alphabetically first
    if (floorIndex + 1 === ceilingIndex) {
      break;
    }
  }
  return ceilingIndex;
};

var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

console.log(findRotationPoint(words));
