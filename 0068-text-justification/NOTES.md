1. Initialize Variables: We need to keep track of the current line's words, the length of words, etc.
2. Greedy Packing: Continuously add words to the current line until we can't add anymore without exceeding the maxWidth.
3. Handle Spaces: Once we've determined which words are on the current line, figure out how to distribute spaces among them. The complexity here is making sure spaces are evenly distributed.
4. Special Case - Last Line: The last line has a special rule. It's always left-justified. So, we have to treat it differently.
5. Special Case - Lines with One Word: If there's only one word on a line, then it should be left-justified too.
6. Repeat: Continue this process for every line until we've processed all words.