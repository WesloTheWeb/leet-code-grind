/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
    let idx = 0, largestSub = 0, commonSub = 0, res = -1;
    
    for (let i = 1; i < arr.length; i++) {
        const prev = arr[i - 1], curr = arr[i];
        const sub = Math.abs(prev - curr);

        if (sub > largestSub) {
            largestSub = sub;
            idx = i;
        } else {
            commonSub = sub;
        };
    };

    if (arr[idx] > arr[idx - 1]) {
        res = arr[idx] - commonSub //if ascending
    } else {
        res = arr[idx] + commonSub //if descending
    };

    return res;
};