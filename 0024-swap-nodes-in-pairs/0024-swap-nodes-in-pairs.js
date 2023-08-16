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
/*
- Create a counter that increments each time visit a node.
- create a prevNode
- Once counter reaches 2.
-  current node next points to previous node
-  might can bypass this making prevNode.next = prevNode.next.next
-  reset counter after the swap
-  prevNode value is now current node.
*/
var swapPairs = function(head) {
    // base case
    if (!head || !head.next) return head;
    
    let dummy = new ListNode(43, head);
    let prev = dummy;
    
    while (head && head.next) {
        let node1 = head; // current
        let node2 = head.next;
        
        // swap
        node1.next = node2.next;
        node2.next = node1;
        prev.next = node2;
        
        head = node1.next;
        prev = node1;
    };
    
    return dummy.next;
};