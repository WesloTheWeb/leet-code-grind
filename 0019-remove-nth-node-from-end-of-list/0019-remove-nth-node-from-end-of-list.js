/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */

/**
 * Remove the nth node from the end of a linked list.
 * @param {ListNode} head - The head node of the linked list.
 * @param {number} n - The nth node from the end to be removed.
 * @return {ListNode} - The head of the modified linked list.
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    
    // Edge case: If the list is empty, return the list as is.
    if (!fast) return head;
    
    // Move the fast pointer n steps ahead.
    for (let i = 0; i < n; i++) {
        if (fast.next) {
            fast = fast.next;        
        } else {
            // If we reached the end of the list before n steps, return the list minus the head.
            return head.next;
        };
    };
    
    // Traverse the list until the fast pointer reaches the end.
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    };
    
    // Skip the nth node from the end.
    slow.next = slow.next.next;
    
    return head;
};
