/**
 * @param {string} digits
 * @return {string[]}
 */

const dict = {
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const results = [];
    
    const backtrack = (current, remainingDigits) => {
        // If no more digits left, add current combination to results
        if (remainingDigits.length === 0) {
            results.push(current);
            return;
        }

        // Take the first digit from remainingDigits and iterate over its letters
        for (let letter of dict[remainingDigits[0]]) {
            backtrack(current + letter, remainingDigits.slice(1));
        }
    };

    // Starting the backtrack function with an empty string and all digits
    backtrack("", digits);
    
    return results;
};