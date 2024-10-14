/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a - b);

    let minDifference = Infinity;
    const results = [];

    for (let i = 1; i < arr.length; i++) {
        const difference = arr[i] - arr[i-1];

        if (difference < minDifference) {
            minDifference = difference;
            results.length = 0;
            results.push([arr[i-1], arr[i]]);
        } else if (difference === minDifference) {
            results.push([arr[i-1], arr[i]]);
        };
    };

    return results;
};