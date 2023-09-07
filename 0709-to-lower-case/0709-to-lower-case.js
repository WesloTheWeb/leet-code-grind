/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        // moves across the string and get the character code of the letter
        let charCode = s.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32); 
            // 32 is difference between uppercase and lower caser
        } else {
            result += s.charAt(i);
        };
    };

    return result;
};

// Time: O(n), iterate over the array once.
// Space: O(n) where n is the length of the array.