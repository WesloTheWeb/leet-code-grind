/**
 * @param {number} num
 * @return {number}
 */
/*
1. create sum variable.
2. while loop for sum is greater than or equal to 10
    a. Add num % 10
    b. Num divide by 10
    c. If num is less than 10.
        i. Add sum to num
        ii. Set sum to 0.
3. Return num.
*/
var addDigits = function(num) {
    let sum = 0;
    
    while (num >= 10) {
        sum += num % 10;
        num = Math.floor(num / 10);
        
        if (num < 10) {
            num += sum
            sum = 0;
        };
    };
    return num;
};