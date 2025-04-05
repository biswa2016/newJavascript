// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// Time Complexity - O(n)


function findAllDuplicates(arr) {
    let obj = {}
    let dup = []

    for (let val of arr) {
        obj[val] = (obj[val] || 0) + 1
    }
    for (let val in obj) {
        if (obj[val] >= 2) {
            dup.push(Number(val));
        }
    }
    return dup;

}

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));


function findAllDuplicates1(arr) {
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        let index = Math.abs(arr[i]);

        // Ensure valid index range (1 to n)
        console.log(i, index);

        if (index - 1 < arr.length) {
            if (arr[index - 1] < 0) {
                duplicates.push(index); // Already visited, so it's a duplicate
            } else {
                arr[index - 1] = -arr[index - 1]; // Mark as visited
            }
        }
    }

    return duplicates;
}

console.log(findAllDuplicates1([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]
// console.log(findAllDuplicates1([4, 3, 2, 1, 0])); // []
// console.log(findAllDuplicates1([4, 3, 2, 1, 0, 1, 2, 3])); // [1, 2, 3]

