/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const newStr = x.toString();

    let left = 0;
    let right = newStr.length - 1;

    while (left < right) {
        if (newStr[left] !== newStr[right]) {
            return false;
        };

        left++;
        right--;
    };  

    return true;

};