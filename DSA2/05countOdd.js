// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).



// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].

function countOdd(low, high) {
    // if (low === high && low < high) return [];
    // let oddList = [];
    let count = 0
    for (let i = low; i <= high; i++) {
        if (i % 2 !== 0) {
            // oddList.push(i);
            count++;
        }
    }
    return count;
}

console.log(countOdd(3, 7));
console.log(countOdd(8, 10));

// more faster optimize way
function countOddOpt(low, high) {
    return Math.floor((high + 1) / 2) - Math.floor(low / 2);
}

console.log(countOddOpt(3, 7));
console.log(countOddOpt(8, 10));

