/**
 * @param {number} n
 * @return {number}
 */
/*
 Mostly a math trick
*/
var smallestEvenMultiple = function(n) {
    if (n % 2 === 0) {   // If n is even
        return n;
    } else {             // If n is odd
        return 2 * n;
    };   
};