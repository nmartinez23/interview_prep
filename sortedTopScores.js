// Write a function that takes an array of unsortedScores and the
// highestPossibleScore in the game and returns a sorted array of scores.
// O(n) time and O(n) space

function sortScores (unorderedScores, highestPossibleScore) {
  // array of 0s at indices 0..highestPossibleScore
  var scoresToCounts = [];

  for (var i = 0; i < highestPossibleScore + 1; i++) {
    scoresToCounts.push(0);
  }
  // populate scoresToCounts
  unorderedScores.forEach(function (score) {
    scoresToCounts[score]++;
  });

  var sortedScores = [];
  scoresToCounts.forEach(function (count, score) {

    // for the number of times the item occurs
    for (var time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  });

  return sortedScores;
};

var scores = [88, 17, 93, 99, 34];
var highestScore = 100;
console.log(sortScores(scores, highestScore));
