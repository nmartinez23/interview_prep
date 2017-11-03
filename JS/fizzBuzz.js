// Create a function that takes a number. Count up from 1 to the number.
// If the number is divisible by 3 and 5, return 'FizzBuzz', if the number
// is divisible by 3, return 'Fizz', if the number is divisible by 5, return
// 'Buzz', if the number is divisible by neither, return the number.

var fizzBuzz = function(n) {
  for(var i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if(i % 3 === 0) {
      console.log("Fizz");
    } else if(i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(30);
