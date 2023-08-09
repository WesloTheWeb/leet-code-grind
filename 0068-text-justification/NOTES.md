**1. Initialize Variables**: We need to keep track of the current line's words, the length of words, etc.
**2. Greedy Packing**: Continuously add words to the current line until we can't add anymore without exceeding the maxWidth.
**3. Handle Spaces**: Once we've determined which words are on the current line, figure out how to distribute spaces among them. The complexity here is making sure spaces are evenly distributed.
**4. Special Case - Last Line**: The last line has a special rule. It's always left-justified. So, we have to treat it differently.
**5. Special Case - Lines with One Word**: If there's only one word on a line, then it should be left-justified too.
**6. Repeat**: Continue this process for every line until we've processed all words.
​
**Time Complexity:**
For each word, we either process it to add to the current line or process a line of words to add spaces, both of which can be done in linear time. So, our overall time complexity is O(N) where N is the total length of words.
​
**Space Complexity:**
The additional space we used is for storing the result and the current line words. The rest of the space is used for variables that use constant space. Thus, our space complexity is O(N).