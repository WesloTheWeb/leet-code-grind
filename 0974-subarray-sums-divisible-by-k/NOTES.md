1. Initialize count to 0
2. Initialize sum to 0
3. Create a map to store remainders and their frequencies
4. Add an entry in the map with key 0 and value 1
5. Loop through the nums array
a. Add the current element to sum
b. Calculate the remainder of sum divided by k (sum % k), taking care of negative remainders
c. If the map has the remainder as a key, increment the count by the value of that key in the map
d. Increment the value of the remainder key in the map by 1, or set it to 1 if it doesn't exist
6. Return count
​
**Approach**
We initialize count to store the number of subarrays that meet the condition, and sum to store the cumulative sum of the elements as we iterate through the array.
We create a map to store the remainders (modulo k) and their frequencies.
We add an entry in the map with key 0 and value 1 to account for the case when the cumulative sum is already divisible by k.
We loop through the nums array and for each element, we calculate the cumulative sum and the remainder (sum % k). We also handle negative remainders by adding k and taking modulo k again.
If the map already contains the remainder, it means we have found a subarray that meets the condition, so we increment the count by the frequency of that remainder in the map.
Finally, we update the frequency of the remainder in the map.
​
**Example**:
nums = [4, 5, 0, -2, -3, 1], k = 5
​
count = 0
sum = 0
map = {0: 1}
​
Loop through nums:
​
i = 0, sum = 4, remainder = 4, count = 0, map = {0: 1, 4: 1}
i = 1, sum = 9, remainder = 4, count = 1, map = {0: 1, 4: 2}
i = 2, sum = 9, remainder = 4, count = 3, map = {0: 1, 4: 3}
i = 3, sum = 7, remainder = 2, count = 3, map = {0: 1, 4: 3, 2: 1}
i = 4, sum = 4, remainder = 4, count = 5, map = {0: 1, 4: 4, 2: 1}
i = 5, sum = 5, remainder = 0, count = 7, map = {0: 2, 4: 4, 2:
​