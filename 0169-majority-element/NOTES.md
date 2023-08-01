We are given an array of size n, and need to **return the majority element.**
majority element = n / 2
​
*assumptions*
- A **majority element will always exist in the array**
- **majority element is different than number of times**.
- We **use the number of times to find that element and compare it to` n / 2`.**
​
Example 1:
Input: nums = `[3,2,3]`
**3 / 2 = 1.5 times, and 2 (times that 3 appears) > 1.5 times**
Output: 3
​
Example 2:
Input: nums = `[2,2,1,1,1,2,2]`
**7 / 2 =3.5 times, 2 actually appears 4 times, greater than 3.5**
Output: 2
Question / edge cases:
[1,2,3] there is no repeating element but our constraint always expect a repeating element, so we can assume the number will appear at least twice, as seen in example 1.
- can there be two majority elements?
​
Example 3
Input: nums = [2,2,2,2,1,3,4,5,6,2,2,2]
12 / 2 = 6. 2 appears 7 times, 2 is the majority element. 7 > 6.
​
Approach 1: Hashmap
- We can create a hashmap as we iterate through the array and get the occurrences of each element.
- As a check, we can set a number that defines the majority element, which is n length / 2 times.
- We iterate over the hashmap and return the number greater than that.
​