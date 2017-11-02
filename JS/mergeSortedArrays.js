// Write a function to merge sorted arrays of order IDs(integers) into one array.
// O(n) time and O(n) space, where n is the number of items in the merged array.

function mergeArrays(firstArray, secondArray) {
  var mergedArray = [];
  var currentIndexFirst = 0;
  var currentIndexSecond = 0;
  var currentIndexMerged = 0;

  while (currentIndexMerged < (firstArray.length + secondArray.length)) {

    var isFirstExhausted = currentIndexFirst >= firstArray.length;
    var isSecondExhausted = currentIndexSecond >= secondArray.length;

    // case: first array must not be exhausted, and EITHER: 1) second array IS exhausted, or
    // 2) the current element in first array is less than the current element in second array
    if (!isFirstExhausted && (isSecondExhausted ||
       (firstArray[currentIndexFirst] < secondArray[currentIndexSecond]))) {

      mergedArray[currentIndexMerged] = firstArray[currentIndexFirst];
      currentIndexFirst++;

    } else {
      mergedArray[currentIndexMerged] = secondArray[currentIndexSecond];
      currentIndexSecond++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
};

var array1 = [1, 3, 6, 9];
var array2 = [2, 5, 7];
console.log(mergeArrays(array1, array2));
