# Findings
- Each element in the array is a sentence.
- Not necessarily more letters is equal to more words.
- Words defined by space
​
​
# Approach
- Iterate over each element and count the words. A word is when reached a white space, but also need to account for the last word in the sentence.f
​
Split the sentence using a space character to get an array of words.
Count the number of words in the array.
Keep track of the maximum count found.
The overall solution can be achieved in one pass through the sentences array, making it efficient.
​
Time complexity:
For every sentence in the array, we are splitting the string into words. Let n be the number of sentences and m be the average length of the sentence. The overall complexity would be O(n * m).
​
Space complexity:
We are only using a few extra variables to store the maximum count and not any additional data structures. Therefore, the space complexity is O(1).