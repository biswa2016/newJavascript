
function sumOfMatrix(array) {
    let sum = 0;  // 1 time
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            sum += array[i][j]
        }
    }
    return sum; // 1 time
}

/*
 this algorithm  run O(N^2)
 ✅ Time Complexity:
Outer loop runs N times (number of rows).

Inner loop runs M times (number of columns per row).

Total operations = N * M ⇒ O(N × M)

If the matrix is square (N × N), then yes — it's O(N²).
*/
console.log(sumOfMatrix([[1, 2, 4], [2, 3, 6], [5, 9, 0]]));


function fn(nums) {
    let arr = [];
    for (let i = 1; i < nums; i *= 2) {
        arr.push(i);
    }

    return arr;
}

/*
this is O (logN)
✅ Time Complexity:
i doubles every iteration: 1, 2, 4, 8, 16...

Number of iterations ≈ log₂(n)

So, time complexity is: O(log N) ✅
 */
console.log(fn(16));


function sumOfDigit(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(sumOfDigit(4235));

/*
Number of digits in num is O(log₁₀(num))

So, time complexity: O(log N)
(where N is the input number)

 */


/*
✅ Quick Reference Table:
Input size n	Acceptable Time Complexity (Worst Case)
n ≤ 10	O(n!) or O(2ⁿ) (brute force, backtracking)
n ≤ 15–20	O(2ⁿ) or O(n·2ⁿ) (bitmasking, DP)
n ≤ 100	O(n³) (cubic time is acceptable)
n ≤ 1,000	O(n²) (nested loops or DP table)
n ≤ 10⁴ (10,000)	O(n·log n) or O(n√n)
n ≤ 10⁵ (100,000)	O(n·log n) (sorting, segment tree)
n ≤ 10⁶ (1M)	O(n) (linear time)
n ≥ 10⁷+	O(1) or O(log n) only
 */







/*
🧠 What this means:
If the problem gives you n = 1,000,000, and you try an O(n²) solution (like nested loops), your code will time out or crash.

But if n = 10, you can even try brute-force or recursion with backtracking (O(2ⁿ) or O(n!)).

💡 Examples:
Problem Type	Input Size	Suggested Time Complexity
Permutations / Combinations	n ≤ 10	O(n!)
Subset / DP on bits	n ≤ 20	O(2ⁿ)
Matrix operations	n ≤ 100	O(n³)
Sorting problem	n ≤ 10⁵	O(n log n)
Searching (binary search)	n ≤ 10⁷	O(log n)
*/
