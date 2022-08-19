If ever do this again and lose the original solution it is this below:
```
var mergeTwoLists = function(list1, list2) {
const dummyHead = new ListNode(null);
let curr1 = list1;
let curr2 = list2;
let tail = dummyHead;
while (curr1 && curr2) {
if (curr1.val < curr2.val) {
tail.next = curr1;
curr1 = curr1.next;
} else {
tail.next = curr2;
curr2 = curr2.next;
};
tail = tail.next;
};
if (curr1) tail.next = curr1;
if (curr2) tail.next = curr2;
return dummyHead.next;
};
```