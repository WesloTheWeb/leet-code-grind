# Findings:
- Number is a multiple of itself
- We want the samllest *even* multiple.
​
Example 1:
n = 5
output: 10
small multiple of both 5 and 2 is 10.
couldnt be 5 and 1 because we want even.
​
Exampl 2:
n = 6
output: 6
It cant be 3 because it is odd and 2 is even and less than 3.
**Notice it is 5 and 2 and 6 and 2. More math based**
​
Exampl 3:
n = 16
output: 8? because 2 and 8 is 16?
​
APPROACH:
1. Modulo to check if its even since it has to be even.
- We also want the smallest so we can use the Math API of Math.min() to take the smallest.
- ideally it should be one of the first but keeping in mind a number is a multiple of itself but it rules out being multiplied by 1.
​
2. I over complicated things, but this is just a math check. Didn't know about mutiplying n by 2.