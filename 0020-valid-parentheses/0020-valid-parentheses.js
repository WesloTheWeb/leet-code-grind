/**
 * @param {string} s
 * @return {boolean}
 */
/* APPROACH - Recursive
- Base case if s.length is odd false
we have 3 possible input types that have a corresponding close 
- so if we open one we need to close one in the correct order of the same type.

PSEUDO CODE
- Define our base cases.
- Need a way to match the bracket types.
    - maybe a type array and compare it to the index because its at a fixed position?
- Initialize stack to be the input,
we pop each time (shouldnt matter since open - close pattern and even)

Time: O(n)
Space: O(n) n is the length of the array / string.

*/


const inputTypes = ['(', ')', '{', '}','[',']'];

var isValid = function(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (brackets[currentChar]) {
            // If the current character is an opening bracket, push the corresponding closing               bracket to the stack
            stack.push(brackets[currentChar]);
        } else {
            // If the current character is not an opening bracket, it must be a closing                        bracket
            // Pop the stack and compare the popped element with the current character
            // If they don't match, return false
            if (stack.pop() !== currentChar) {
                return false;
            };
        };
    };

    // If the stack is empty after iterating through the input string, the input string is valid
    return stack.length === 0;
};