// Write a function that takes an integer flightLength (in minutes) and
// an array of integers movieLengths (in minutes) and returns a boolean
// if there are two numbers in movieLengths whose sum equals flightLength.
// Assume your users will watch exactly two different movies.

function canTwoMoviesFillFlight (movieLengths, flightLength) {

  var movieLengthsSeen = new Set();

  for (var i = 0; i < movieLengths.length; i++) {
    var firstMovieLength = movieLengths[i];
    var matchingSecondMovieLength = flightLength - firstMovieLength;

    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    };

    movieLengthsSeen.add(firstMovieLength);
  }
  // return false if no match found
  return false;
}

console.log(canTwoMoviesFillFlight([128, 97, 109, 91, 76, 129], 220));
