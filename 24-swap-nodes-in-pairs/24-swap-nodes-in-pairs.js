/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* APPROACH
- dummy pair that points to node
- while loop to iterate through
- switcharoo pattern:
    variable hold next value in memory
    current value points to that variable
    next pointer points to the "current" (old)
    
    we want the current node value to equal the next node value.

*/
var swapPairs = function(head) {
    const dummy = new ListNode();
    dummy.next = head;
    let temp = dummy; // points to original head of list value (i.e = 1)
    
    while (temp.next && temp.next.next) {
      let node1 = temp.next; // current
      let node2 = temp.next.next; // next node value
        
      temp.next = node2;
      node1.next = node2.next;
      node2.next = node1    
      temp = node1; // iterates and moves      
    
    };
    
    return dummy.next;
};

