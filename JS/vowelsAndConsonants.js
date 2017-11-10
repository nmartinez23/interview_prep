// Complete the vowelsAndConsonants function.
// Print your output using 'console.log()'.

function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];
  let str = s.split('');

  str.forEach(function(letter) {
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      vowels.push(letter);
      console.log(letter);
    } else if (letter === " ") {
      str.splice(letter, 1);
    } else {
      consonants.push(letter);
    }
  });

  consonants.forEach(function(letter) {
    console.log(letter);
  });
}
