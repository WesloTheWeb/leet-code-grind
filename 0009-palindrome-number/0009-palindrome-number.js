/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    
    let left = 0;
    let right = str.length - 1;
    
    
    for (let i = 0; i < str.length; i++) {
      if (str[left] !== str[right]) {
          return false;
      };
        
        left++;
        right--;
    };
    
    return true;
};