/*
[Exercise 8]
Write a function for a Sum of Multiple of 3 and 5

Multiple of 3: 3, 6, 9
Multiple of 5: 5, 10
*/

console.log(sum(10));

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
        if (i % 3 ===0 || i % 5 ===0)
            sum += i;

    return sum;
}