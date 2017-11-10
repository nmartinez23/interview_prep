// Write algorithm that tests for palindromes
// if input has space(s)
function pal(str) {
  var originalStr = str.split('');
  
  for (var i = 0; i < originalStr.length; i++) {
    if (originalStr[i] === " ") {
      originalStr.splice(i, 1);
    }
  }

  originalStr = originalStr.join('');
  var reversed = originalStr.reverse().join('');
  
  if (originalStr === reversed) {
    return true;
  } 
  
  return false;
}

pal("race car");



// if input has no spaces
function pal(str) {
  var reversed = str.split('').reverse().join('');
  
  if (str === reversed) {
    return true;
  } 
  
  return false;
}

pal("racecar");
