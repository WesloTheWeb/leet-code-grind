/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  // Step 1: Initialize a priority queue (max heap)
  stones.sort((a, b) => b - a);

  while (stones.length > 1) {
    // Step 2: Dequeue the two largest stones
    let y = stones.shift();
    let x = stones.shift();

    // Step 2.2: If they are not the same, enqueue the difference
    if (x !== y) {
      stones.push(y - x);
      // Re-sort to maintain the heap property
      stones.sort((a, b) => b - a);
    }
  }

  // Step 3: Return the weight of the last stone or 0
  return stones.length ? stones[0] : 0;
};