**APPROACH**
**We are not actually removing the interval, just returning the NUMBER of what we need to remove**
We need to remove overlap. It is okay if there is a start that begins with the end of previous interval **i.e [ [1,2], [2,3 ]**
- but [1,3] is not okay in the above. Would need to remove 2.
​
We should check each interval start and end. Not sure how to do this exactly...