/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/*APPROACH
1. Needle is equal to a value
2. haystack is equal to a value

2 pointers iterate over haystack and needle if it contains the letters.

const hay = "aabbcc"
const needle = "bcc"

a a b b c c         
  l

b c c
l
*/
var strStr = function (haystack, needle) {
    if (!needle) return 0;
    if (!haystack) return -1;
    if (haystack.length < needle.length) return -1;


    let i = 0;
    let j = 0;

    while (i < haystack.length && j < needle.length) {

        if (haystack[i] === needle[j]) {
            ++i;
            ++j;
        } else {
            i = (++i) - j;
            j = 0;
        };
    };
    
    if (j === needle.length) return i - j;

    return -1;
};