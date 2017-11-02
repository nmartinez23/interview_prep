// Write a function that checks whether any permutation
// of an input string is a palindrome. O(n) time and space

function hasPalindromePermutation (str) {

  var unpairedCharacters = new Set();

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }
  // str has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
};

console.log(hasPalindromePermutation('cviic')); // true
