/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
    // ---  pseudo code ---
    // go thru all (worker, bike) pair to get [distance, workerIdx, bikeIdx] -> store in pq
    // sort pq by: dist, workerIdx, bikeIdx
	// assign bike to worker accordingly
	
	// calculate distance
    const dist = (x, y) => {
    	return Math.abs(x[0]-y[0])+Math.abs(x[1]-y[1]);
    }
	
	// sorting rules
    const sortFunc = (a, b) => {
    	const [distA, wa, ba] = a;
    	const [distB, wb, bb] = b;

    	return distA-distB===0 ? 
    		(wa-wb === 0 ? ba-bb : wa-wb) : distA-distB;
    }

    let pq = [];
	// calculate each worker, bike pair
    for (let i=0; i<workers.length; i++){
    	for (let j=0; j<bikes.length; j++){
    		let curDist = dist(workers[i], bikes[j]);
    		pq.push([curDist, i, j]);
    	}
    }
	// sort pq
    pq.sort((a,b)=>sortFunc(a,b));
	
    let result = new Array(workers.length).fill(null);
    let used = new Set();
    for (let i=0; i<pq.length; i++){
    	if (used.size===workers.length) break;
    	let [_, w, b] = pq[i];
    	if (used.has(b) || result[w]!==null) continue;
    	result[w]=b;
        used.add(b);
    }
    return result;
};