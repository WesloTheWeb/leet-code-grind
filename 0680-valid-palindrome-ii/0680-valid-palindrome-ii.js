/**
 * @param {string} s
 * @return {boolean}
 */
/*
- 2 pointer approach iterate over the string 's'
- If left and right pointer are the same move left to the right, 
and move the right to the left.
- if left !== right, add to counter and move pointers again.
- if they cross and everything match return true
- if another mismatch add to counter and return false.
*/
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    let mismatchCounter = 0;
    
    const isPalindrome = (str, left, right, mismatchCounter) => {
        while (left < right) {
            if (str[left] !== str[right]) {
                mismatchCounter++;  
                if (mismatchCounter > 1) return false;
        };
        
        left++;
        right--;
        };
        
        return true;
    };
    
    while (left < right) {
      if (s[left] !== s[right]) {
          const skipLeft = isPalindrome(s, left + 1, right, 1);
          const skipRight = isPalindrome(s, left, right - 1, 1);
          
          return skipLeft || skipRight;
      };
    
    left++;
    right--;
    }
    
    return true;
};
/*
s = "aba"
left = 0
right = 2

['a', 'b', 'a']
      left       
     right
 
s[left]: b
s[right]: b
mismatch: 0

s = "aba"
left = 0
right = 2

['a', 'b', 'a']
      left       
     right
 
s[left]: b
s[right]: b
mismatch: 0

Input: s = "abc"
left = 0
right = 2

['a', 'b', 'c']
 left       
      right
 
s[left]: a
s[right]: b
mismatch: 2

*/