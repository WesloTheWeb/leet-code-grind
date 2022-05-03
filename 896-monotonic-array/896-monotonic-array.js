/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(arr) {
      let increasing = false;
  let decreasing = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      if (decreasing == true) {
        return false
      }
      increasing = true;
    }  

    if (arr[i] > arr[i + 1]) {
      if (increasing == true) {
        return false
      }
      decreasing = true;
    } 
  };
  return true
};