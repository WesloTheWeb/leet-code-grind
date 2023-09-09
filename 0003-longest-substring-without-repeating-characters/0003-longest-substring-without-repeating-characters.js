/**
 * @param {string} s
 * @return {number}
 */
/*
"abcabcbb"
      ^^            
1
save to running variable and reset count

Output: 3

- Create frequency map
- Use a sliding window as we iterate over the array
 
*/
var lengthOfLongestSubstring = function(s) {
    const freqMap = new Map();
    let longestSubstringLength = 0;
    
    // window
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
      let char = s[end]; 
        
        if (freqMap.has(char)) {
            start = Math.max(start, freqMap.get(char) + 1)
        };
        
        freqMap.set(char, end); // update the latest position of the character
        longestSubstringLength = Math.max(longestSubstringLength, end - start + 1);
    };
    
    return longestSubstringLength;
};