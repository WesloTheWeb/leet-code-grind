/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
   // Start at long substrings
  for (let length = s.length; length > 0; length--) {
    for (let start = 0; start <= s.length - length; start++) {
      if (isPalindrome(s, start, length)) {
        // Because we're starting with the longest substrings, we can just
        // return as soon as we find a palindrome.
        return s.substring(start, start + length);
      };
    };
  };

  return 0;
};

// helper function
function isPalindrome(s, start = 0, length = undefined) {
  length = length || s.length;
  let end = start + length - 1;

  while (start < end) {
    if (s[start++] !== s[end--]) return false;
  };
  
    return true;
};