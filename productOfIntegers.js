// You have an array of integers, and for each index you want to find the product of every
// integer except the integer at that index.
// Write a function that takes an array of integers and returns an array of the products.
// This algorithm uses a greedy approach. Complexity is O(n) time and O(n)O(n) space. We make two passes
// through our input an array, and the array we build always has the same length as the input array.

function getProductsOfAllIntsExceptAtIndex (intArray) {
  var productsOfAllIntsExceptAtIndex = [];

  // for each integer, we find the product of all the integers before it
  var productSoFar = 1;

  for (var i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }
  // for each integers, we find the product of all the integers after it
  productSoFar = 1;

  for (var j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }
  return productsOfAllIntsExceptAtIndex;
};

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
