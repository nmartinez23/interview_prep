// Write a recursive function for generating all permutations of a string and return as a set.

function getPermutations (string) {
  // base case
  if (string.length <= 1) {
    return new Set(string);
  };

  var allCharsExceptLast = string.slice(0, -1);
  var lastChar = string[string.length - 1];

  var permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // put last char in all possible positions for each of the above permutations
  var permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(function (permutationOfAllCharsExceptLast) {
    for (var position = 0; position <= allCharsExceptLast.length; position++) {
      var permutation = permutationOfAllCharsExceptLast.slice(0, position) +
                        lastChar + permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });

  return permutations;
};

console.log(getPermutations('cats'));
