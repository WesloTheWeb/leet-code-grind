- Return group anagrams in any order.
ASSUMPTIONS:
- Essentially same as regular anagrams but we want to group together
​
APPROACH 1: Hashmap
We can use the hashmap frequencies, similar to adjacency list, to see if letters rare there,
this works better than sorting each group.
​
PSEUDOCODE:
- Iterate through the array
- add each character to a hashmap where the **key is the sequence**, and t**he value is the string (aka the element).**
- As we are iterating and adding, we should have the words that contains the key of characters in an array value.
- We can iterate our hashmap with a now grouped anagram which contains words of our characters.
​
**NOTE**
Ascil for lowerletters is 96 - 127