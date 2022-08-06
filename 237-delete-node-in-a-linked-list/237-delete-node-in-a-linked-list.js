/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
/* APPROACH:
- access to the node
- not a tail, not the head
- if its the node to be deleted, just change the pointer of said node
*/
var deleteNode = function(node) {
    
    node.val = node.next.val;
    node.next = node.next.next;

};