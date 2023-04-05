e are using a while loop because we want to keep dividing the number by 2, 3, and 5 until it cannot be divided any further by these numbers.
​
The while loop checks if the current number is divisible by 2, 3, or 5. If it is, we divide the number by the corresponding factor and update the value of the number. We keep doing this until the number is no longer divisible by 2, 3, or 5.
​
For example, let's say we have the input number 60. We start by checking if it is divisible by 2. Since 60 is divisible by 2, we divide it by 2, and we get 30. We check again if 30 is divisible by 2. It is, so we divide it by 2 again and get 15. We check if 15 is divisible by 2. It is not, so we move on to checking if 15 is divisible by 3. Since 15 is divisible by 3, we divide it by 3 and get 5. We check if 5 is divisible by 2, 3, or 5, and it is not. Therefore, we stop dividing the number and check if the final value of the number is equal to 1. If it is, then the input number is an ugly number. If not, it is not an ugly number.
​
The while loop allows us to repeatedly divide the number by 2, 3, and 5 until it cannot be divided any further by these factors.