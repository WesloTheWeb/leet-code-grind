/**
 * @param {number[][]} intervals
 * @return {number}
 */
/*
- Sort the interval,s
- create count and prev 
- iterate over interval, increment count if overlap else prev is i++
*/
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    
    let count = 0;
    let prev = 0;
    
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        
        if (current[0] < intervals[prev][1]) {
            count++;
        } else {
            prev = i;
        };
    };
    
    return count;
};