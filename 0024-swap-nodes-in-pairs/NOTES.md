# Findings
- swap two adjacent nodes, return head
- seems to happen in one pass iterating over linked list
- empty jhead return null
- if only one element return just as is.
- **without changing the value**
**example**
head --> 1 --> 2 --> 3 --> 4 --> null
^
head -> 2 -> 1
--> 4 --> 3 --> null
​
head --> 2 --> 1 --> 4 --> 3 --> null
​
​
**Example case of 3**
head --> 1 --> 2 --> 3 --> null
head --> 2 --> 1 --> 3 --> null
[1, 2, 3]
[2, 1, 3]
​
# Approach
- Create a counter that increments each time visit a node.
- create a prevNode
- Once counter reaches 2.
-  current node next points to previous node
-  might can bypass this making prevNode.next = prevNode.next.next
-  reset counter after the swap
-  prevNode value is now current node.