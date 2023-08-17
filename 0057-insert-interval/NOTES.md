# Findings
- When we insert an interval in, we can consolidate existing intervals, either add it to the range or condense.
- **Already sorted in ascending order**
**example 1**
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
**Output: [[1,5],[6,9]]**
[1,3] --> [1,5] because [2,5] is within [1, 3] so we can combine them.
**example 2**
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
**Output: [[1,2],[3,10],[12,16]]**
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
​
- For new interval to our existing interval, if it overlaps and it's start or end is less than or greater respectively, we can merge that interval into one, **but only if it overlaps**
​
# Approach
1. Iterate over intervals while comparing the `newInterval[0][0]` and `newInterval[0][1]` to each subarray in intervals array.
2. if the newInterval start time is greater than exisiting interval[0][0] it is overlapping and we form a new interval
2a. if newInterval[0][1] end is greater than interval start then...
​
**STOP! I am getting no where and need help refer to Neetcode.**
​
Create an empty list called result.
​
Loop through intervals:
​
For each interval i in intervals:
If i[1] < newInterval[0], it means i is completely before newInterval. So, add i to the result and continue.
If i[0] > newInterval[1], it means i is completely after newInterval. This is where you should insert newInterval into the result (if not already inserted), then continue adding the remaining intervals from intervals to result.
If the above conditions are not met, it means i is overlapping with newInterval. Merge i with newInterval by setting newInterval[0] to the minimum of i[0] and newInterval[0], and newInterval[1] to the maximum of i[1] and newInterval[1].
After the loop, if newInterval hasn't been added to result, add it.
​
Return the result.
​
​
​