// time complexity - O(N^2)
function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        console.log(temp, max);
    }
    return max;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// time complexity - O(N)

function maxSubArraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        console.log('l', tempSum);
        tempSum = tempSum - arr[i - num] + arr[i];

        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubArraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
