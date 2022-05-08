/**
 * @param {number[][]} points
 * @return {number}
 */
/*APPROACH
Slope = y = mx + b
(y2 - y1)  = y  = m
(x2 - x1)    x

plug x & y and the newly found m into y = mx + b
- to get b
*/
function lineSignature([x0, y0], [x1, y1], p = 16) {
    if (x0 === x1) {
        return `Infinity|${x0}`;
    }
    const slope = Math.floor(((y1 - y0) * 10**p) / (x1 - x0));
    const intercept = 10**p * y0 - slope * x0;
    return `${slope}|${intercept}`;
}

var maxPoints = function(points) {
    if (!points.length) {
        return 0;
    }
    const lineHash = {};
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const signature = lineSignature(points[i], points[j]);
            if (lineHash[signature] === undefined) {
                lineHash[signature] = new Set();
            }
            lineHash[signature].add(i).add(j);
        }
    }
    return Math.max(1, ...Object.values(lineHash).map(s => s.size));
};