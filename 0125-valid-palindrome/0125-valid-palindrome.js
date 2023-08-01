/**
 * @param {string} s
 * @return {boolean}
 */
/*
Pseudo Code:
1. Create two pointers starting at beginning and end, left and right respectively.
2. sanitize string to go from uppercase to lowercase and remove all non-alphanumeric
2. While loop, we close in to middle as each letter should be equal
3. if not equal we return early of false.
4. else if reach end valid palindrome for even and odd number characters.
*/
var isPalindrome = function(s) {
    
    const newStr = sanitizeString(s);
    
    let left = 0;
    let right = newStr.length - 1;
    
    while (left < right) {
      if (newStr[left] !== newStr[right]) {
          return false;
      } else {
         left++;
         right--;
      }
    };
    
    return true;
};

const sanitizeString = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
};