/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
/*
rectangle
[       ,[x2,y2]]
[[x1, y1],     ]


Approach:
- The width is positive when min(rec1[2], rec2[2]) > max(rec1[0], rec2[0]), that is when the smaller of (the largest x-coordinates) is larger than the larger of (the smallest x-coordinates). The height is similar.

*/
var isRectangleOverlap = function(rec1, rec2) {
    // If there is zeroes, return false.
    if (!rec1 || !rec2 || rec1.length == 0 || rec2.length == 0) return false;
    
    // cases where valid.
    if (((rec1[2] > rec2[0]) && (rec1[3] > rec2[1])) && ((rec1[0] < rec2[2]) && (rec1[1] < rec2[3]))) return true;
    return false;
};