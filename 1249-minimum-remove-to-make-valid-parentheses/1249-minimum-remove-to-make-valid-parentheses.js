/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let invalidIndices = new Set();
    
    // Traverse the string to find unmatched parentheses
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                invalidIndices.add(i);
            } else {
                stack.pop();
            };
        };
    };
    
    // Add remaining unmatched '(' to invalidIndices
    while (stack.length) {
        invalidIndices.add(stack.pop());
    };
    
    // Construct the result string
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!invalidIndices.has(i)) {
            result += s[i];
        };
    };
    
    return result;
};