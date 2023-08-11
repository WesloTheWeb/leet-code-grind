# Findings / Assumptions
- We want to priont level by level, we know BFS is using a queue and goes level by level.
- We just need a way to stop and start at each level.
​
# Approach
- Two queues, where one queue is our normal to currLevel and our other is nextLvl.
- Inside of the current queue we want to push all elements and push their children to the the other queue, nextLvl.
- queue will now be equal to next Lvl and we continue the loop.
​
​