/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
/* APPROACH:
- Intialize head of list
- call getRandom to get random

*/
var Solution = function (head) {
    this.head = head;
    this.size = 0;
    while (head) {
        head = head.next;
        this.size++;
    }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let rand = Math.floor(Math.random() * (this.size));
    let hc = this.head;
    let i = 0;
    while (hc) {
        if (i >= rand)
            return hc.val;
        hc = hc.next;
        i++;
    }
    return hc.val;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */