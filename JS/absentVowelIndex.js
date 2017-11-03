// Figure out the index of which vowel is missing from a given string.
// A has an index of 0, E has an index of 1, I has an index of 2,
// O has an index of 3, U has an index of 4.

function absentVowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var arr = [];

  for(var i = 0; i < vowels.length; i++) {
    if(!str.includes(vowels[i])) {
      arr.push(i);
    };
  }

  return arr;
};

var result = absentVowel('hey you');
console.log(result);
