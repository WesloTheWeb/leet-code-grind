This is essentially a problem of sorting the array of stones in decreasing order and then reducing the array by smashing the heaviest two stones together, until at most one stone is left.
​
We can use a priority queue (also known as a max heap in this context) for this. JavaScript doesn't have built-in support for priority queues, but we can use the built-in Array type and its methods to emulate a priority queue.
​
**pseudocode:**
**1.** Initialize a priority queue and add all stones into the queue.
**2.** Until the queue size becomes 1 or 0:
**2.1** Dequeue the two largest stones from the queue (call them x and y, where x is the larger stone).
**2.2** If x and y are not the same, enqueue the difference (x - y) back into the queue.
**3.** If there is a stone left in the queue, return its weight, else return 0
​
This JavaScript solution works by using the built-in Array type as a max heap, and the sort method to maintain the heap property (that the largest stone is always at the front of the array) after every operation. This ensures that we're always smashing the two heaviest stones together.
​
Although it works, please note that the performance is not optimal because sorting an array in every iteration leads to a time complexity of O(n^2 logn). There are optimized data structures like binary heap which can do this in a more efficient way (O(n logn)) but implementing that in JavaScript is outside the scope of this question.