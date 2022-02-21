/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}

APPROACH: 
- Two pointers one fast one slow.
1 - 2 - 3 - 4 - 5   || n = 2
                   f
            s
- when fast pointer goes outta bounds return where s goes
 */

var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    
    // null case
    if (fast == null) return head;
    
    // move fast pointer ahead by n
    for (let i = 0; i < n; i++) {
        if (fast.next) {
            fast = fast.next;        
        } else {
            return head.next;
        }
    }    
    
    // move both pointers one at a time.
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    };
    
     slow.next = slow.next.next;
    
    return head;
};