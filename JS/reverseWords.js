// Write a function that takes a string message and reverses the order of the words
// O(n) time and O(n)O(n) space.

function reverseWords (message) {
  var messageArray = message.split('');

  reverseCharacters(messageArray, 0, messageArray.length - 1);

  var currentWordStartIndex = 0;

  for (var i = 0; i <= messageArray.length; i++) {
    // found the end of the current word
    if (i === messageArray.length || messageArray[i] === ' ') {
      // next word's start is one character ahead
      reverseCharacters(messageArray, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
  return messageArray.join('');
};

function reverseCharacters(messageArray, startIndex, endIndex) {

  while (startIndex < endIndex) {
    // swap front and back char
    var temp = messageArray[startIndex];
    messageArray[startIndex] = messageArray[endIndex];
    messageArray[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
}

// quick way
// function reverseWords (message) {
//    return message.split(' ').reverse().join(' ');
// }

console.log(reverseWords('hey you'));
