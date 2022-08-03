/**
 * @param {number} n
 * @return {number}
 */
/*APPROACH:
- fib (3)

fib(3) + fib(3 - 1) 
    fib(3) + fib(2)
        fib(2) + fib(1)
            1 + 1
     3 + 2
    3 + 5
    
    
   1
   
*/
var fib = function(n) {
    // base case
    if (n <= 1) return n;
    
    // recursive case
    return fib(n - 1) + fib(n - 2);
    
};