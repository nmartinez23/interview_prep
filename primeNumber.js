// Write a function that determines if number is prime
function primeTime(num) { 
  // all numbers less than 2 are not primes
  if (num < 2) { return false; }       

  for (var x = 2; x < num; x++) {
    if(num % x === 0) {
      return false;
    }
  }
  return true;
}

primeTime(109);
// true
