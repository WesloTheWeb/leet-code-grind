/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let satisfiedCustomers = 0;
  let maxAdditionalSatisfiedCustomers = 0;
  let additionalSatisfiedCustomers = 0;
  
  // Calculate the number of satisfied customers without using the secret technique
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      satisfiedCustomers += customers[i];
    }
  }
  
  // Calculate the additional number of satisfied customers that we can get by using the secret technique
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      additionalSatisfiedCustomers += customers[i];
    }
  }
  maxAdditionalSatisfiedCustomers = additionalSatisfiedCustomers;
  
  for (let i = minutes; i < customers.length; i++) {
    if (grumpy[i] === 1) {
      additionalSatisfiedCustomers += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      additionalSatisfiedCustomers -= customers[i - minutes];
    }
    maxAdditionalSatisfiedCustomers = Math.max(maxAdditionalSatisfiedCustomers, additionalSatisfiedCustomers);
  }
  
  return satisfiedCustomers + maxAdditionalSatisfiedCustomers;
};