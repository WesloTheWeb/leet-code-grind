/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
     const graph = new Map();
  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }
  for (const [a, b] of dislikes) {
    graph.get(a).push(b);
    graph.get(b).push(a);
  }
  const colors = new Map();
  
    for (let i = 1; i <= n; i++) {
    colors.set(i, 0);
  };
    
  const dfs = (node, color) => {
    colors.set(node, color);
    
      for (const neighbor of graph.get(node)) {
      if (colors.get(neighbor) === color) {
        return false;
      }
      if (colors.get(neighbor) === 0 && !dfs(neighbor, -color)) {
        return false;
      }
    }
    return true;
  }
  
  for (let i = 1; i <= n; i++) {
    if (colors.get(i) === 0 && !dfs(i, 1)) {
      return false;
    }
  }
    
  return true;
}