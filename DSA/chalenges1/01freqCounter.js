// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) {
        return false;
    }
    let fre = {};

    for (let val of str1) {
        fre[val] = (fre[val] || 0) + 1
    }

    for (let val of str2) {
        if (!fre[val]) return false;
        fre[val]--;
    }
    return true;
}

console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(22, 222));

