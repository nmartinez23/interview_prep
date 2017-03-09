// Build a triangle of asterisks
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  
  return line + "\n";
}

function buildTriangle(num) {
  var result = "";
  for (var i = 1; i <= num; i++) {
    result += makeLine(i);
  }
  
  return result;
}

console.log(buildTriangle(10))

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * * * 
// * * * * * * * 
// * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * * *
