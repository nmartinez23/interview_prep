
// Modify and return the array so that all even elements are doubled and all odd elements are tripled.
// Parameter(s):
// nums: An array of numbers.

function modifyArray(nums) {
  return nums.map(element => element % 2 === 0 ? element * 2 : element * 3);

}



function modifyArray(nums) {
  let modifiedArray = nums.map(element => {
    if (element % 2 === 0) {
      return element * 2;
    } else {
      return element * 3;
    }
  })

  return modifiedArray;
}

modifyArray([1,2,3,4])
