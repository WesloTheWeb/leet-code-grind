/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    
    let longest = 0;
    let l = r = 0;
    const window = new Set();
    
    while (r < n) {
        if (!window.has(s.charAt(r))) {
            window.add(s.charAt(r));
            r++;
        } else {
            window.delete(s.charAt(l));
            l++;
        }
        longest = Math.max(longest, r - l);
    };
    
    return longest;
};