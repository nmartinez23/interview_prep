// Parse a string and some simple operations, manipulations
var myString = 'Hello World. How are you doing?';
var splits = myString.split('', 3);
// ['H', 'e', 'l']

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);
// ['Hello', 'World.', 'How']

var str = 'hello;
var strReverse = str.split('').reverse().join('');
// 'olleh'

Function reverse(str) {
  Var newString = ‘’;
  For (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  Return newString;
}
reverse(‘hello’);
// ‘olleh’

// How would you reverse the words in a string, without reversing the characters?  
var str = 'hey there';
var strReverse = str.split(' ').reverse().join(' ');
// 'there hey'
