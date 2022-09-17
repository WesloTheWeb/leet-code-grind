/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
      let set = new Set();
      let output = [];
      for (let num of nums) {
          set.add(num);
      };
    
      for (let i = 1; i < nums.length + 1; i++) {
         if (!set.has(i)) {
             output.push(i);
         }; 
      };
    
     return output
};