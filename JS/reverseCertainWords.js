// Write a function that takes in a string of one or more words, and returns
// the same string, but with all five or more letter words reversed.

function spinWords(str) {
  var arr = str.split(' ');

  arr.forEach(function(word, idx) {
    if(word.length > 4) {
      arr[idx] = word.split('').reverse().join('');
    }
  });

  return arr.join(' ');
};

var result = spinWords('hello nice to meet you');
console.log(result);
