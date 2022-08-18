Here was our initial attempt but it did not satisfy uneven lists
​
```
function addTwoNumbers(l1, l2) {
let currL1 = l1;
let currL2 = l2;
const listNode = new ListNode(null);
let tail = listNode;
let carryOver = 0;
let remainingValue = 0
while (currL1) {
// do math
// logic for magic sum
let sum = currL1.value + currL2.value; // 12
// before carryOver gets replaced if sum < 9, but carryOver = 1
if (carryOver) {
// we add to the sum
sum += 1; // 13
}
remainingValue = sum > 9 ? sum - 10 : 0; // 3
// see if there is more carryOver
carryOver = sum > 9 ? 1 : 0;
if (carryOver) {
// add remainingValue to tail
tail.next = new ListNode(remainingValue);
} else {
// adding the new sum to the tail
tail.next = new ListNode(sum);
}
// traverse
tail = tail.next;
currL1 = currL1.next;
currL2 = currL2.next;
}
// Uneven list
return listNode.next;
}
```