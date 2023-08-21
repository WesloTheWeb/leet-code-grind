Traverse the string and use a stack to match the parentheses.
For each unmatched parenthesis, mark its index in the string.
After traversing the whole string, remove the unmatched parenthesis based on their indices.
Let's break down the steps:
​
Initialize an empty stack and an empty list invalidIndices.
Traverse each character ch in the string.
a. If ch is '(', push its index onto the stack.
b. If ch is ')', check if the stack is empty. If the stack is empty, this means the current ')' is unmatched, so we add its index to invalidIndices. If the stack is not empty, pop the top of the stack as we've found a matching '(' for the current ')'.
After the string is traversed, there may still be unmatched '(' in the stack. Add their indices to invalidIndices.
Construct the final result string by excluding the characters at the indices in invalidIndices.