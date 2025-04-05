let arrExample = [-4, -3, -2, -1, 0, 1, 2, 3, 5]; // [-3,3]
let str = "shgdagkjsgffeugjfsegskj";

let arr = [-4, -3, -2, -1, 0, 1, 2, 3, 5];

// time complexity - O(N^2)
// space complexity - O(1)


function findPair(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
console.log(findPair(arr));



// time complexity - O(N)
// space complexity - O(1)

function findPairOpt(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
console.log(findPairOpt(arr));
