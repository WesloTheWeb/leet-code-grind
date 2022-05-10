/**
 * @param {number} num
 * @return {boolean}
 */
//  time: O(log n) | space: O(1)
var isPerfectSquare = function(num) {
     let p1 = 1;
	// Split half of values that need to be checked. squared of num/2 will either be equal or greater then num
    let p2 = Math.ceil(num/2);
    while (p1 <= p2) {
        let middle = p1 + Math.floor((p2 - p1)/2);
        if (middle * middle === num) return true;
        if (middle * middle < num) p1 = middle + 1;
        else
            p2 = middle - 1;
    }
    return false;
};