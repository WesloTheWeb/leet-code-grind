/**
 * @param {number} n
 * @return {number}
 */
/*APPROACH
Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

*/

var trailingZeroes = function(n) {
    const res = Math.floor(n / 5);
    
    if (res >= 5) {
        return res + trailingZeroes(res);
    };
    
    return res;
    
};