/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let min = prices[0];
    let res = 0;
    
    prices.forEach(cur => {
        res = Math.max(cur - min, res);
        min = Math.min(min, cur);
    });
    
    return res;
};