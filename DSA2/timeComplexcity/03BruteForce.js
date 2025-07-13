// Brute Force: O(n²)

function findPairs(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(`[${nums[i]}, ${nums[j]}]`);
            }
        }
    }
}

findPairs([2, 4, 3, 5, 7], 7);

// Optimized: O(n) using a hash map / set

function findPairsOptimized(arr,target){
    let seen = new Set();
    for(let num of arr){
        let diff = target - num;
        if(seen.has(diff)){
            console.log(`[${diff},${num}]`);
        }
        seen.add(num)
    }
}

console.log(findPairsOptimized([2, 4, 3, 5, 7], 7));
