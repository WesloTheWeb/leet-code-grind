/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
/*
Create an empty list called result.

Loop through intervals:

For each interval i in intervals:
If i[1] < newInterval[0], it means i is completely before newInterval. So, add i to the result and continue.
If i[0] > newInterval[1], it means i is completely after newInterval. This is where you should insert newInterval into the result (if not already inserted), then continue adding the remaining intervals from intervals to result.
If the above conditions are not met, it means i is overlapping with newInterval. Merge i with newInterval by setting newInterval[0] to the minimum of i[0] and newInterval[0], and newInterval[1] to the maximum of i[1] and newInterval[1].
After the loop, if newInterval hasn't been added to result, add it.

Return the result.
*/

var insert = function (intervals, newInterval) {
    const { beforeIndex, before } = getBefore(intervals, newInterval);
    const afterIndex = mergeIntervals(intervals, newInterval, beforeIndex);
    const after = intervals.slice(afterIndex);

    return [...before, newInterval, ...after];
};

const getBefore = (intervals, newInterval, index = 0, before = []) => {
    const hasGap = ([prevStart, prevEnd], [currStart, currEnd]) =>
        prevEnd < currStart;

    while (index < intervals.length && hasGap(intervals[index], newInterval)) {
        const current = intervals[index];

        before.push(current);
        index++;
    };

    return { beforeIndex: index, before };
};

const mergeIntervals = (intervals, newInterval, index) => {
    const hasOverlap = ([prevStart, prevEnd], [currStart, currEnd]) =>
        currStart <= prevEnd;

    while (
        index < intervals.length &&
        hasOverlap(newInterval, intervals[index])
    ) {
        const current = intervals[index];

        newInterval[0] = Math.min(newInterval[0], current[0]);
        newInterval[1] = Math.max(newInterval[1], current[1]);
        index++;
    };

    return index;
};