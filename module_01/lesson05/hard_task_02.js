'use strict';

{
//* To find the minimum(x, y), we can use the expression y + ((x - y) & ((x - y) >> 31)).

 
//* Now if x is less than y, then (x - y) >> 31 will be -1 (all 1’s in binary representation), so the result r is:

// r = y + ((x – y) & ((x – y) >> 31))
// r = y + ((x – y) & -1)
// r = y + (x – y)
// r = x
//* If x is more than y, then (x - y) >> 31 will be 0, so the result r is:

// r = y + ((x – y) & ((x – y) >> 31))
// r = y + ((x – y) & 0)
// r = y + (0)
// r = y

    const findMin = (x, y) => y + ((x - y) & ((x - y) >> 31));

    const num1 = 100;
    const num2 = -71;
    console.log(`Минимальное число из двух чисел ${num1} и ${num2} число ${findMin(num1, num2)}`);
}