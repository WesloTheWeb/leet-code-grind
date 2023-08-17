/**
 * @param {number} x
 * @return {number}
 */
/*
**Naive**
- Iterate the array, turn to string string 
- from the end backwards to output.
-  add condition to not include 0 if at the end when reverse for printining output
- convert string to integer

321
length: 3

output: 123
*/

var reverse = function(x) {
    let isNegative = false;
    
    // Step 1: Checking the sign
    if (x < 0) {
        isNegative = true;
        x = -x;
    };
    
    // Step 2: Reversing the number
    let reversed = parseInt(x.toString().split('').reverse().join(''), 10);
    
    // No need for Step 3, as parseInt will handle leading zeros for us
    
    // Step 4: Checking overflow
    if (reversed > 2**31 - 1) return 0;  // overflow condition

    return isNegative ? -reversed : reversed;
};
