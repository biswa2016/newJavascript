// What's the idea here?

// how can we determine which one is the best?


// function add(n){
//     let total = 0;
//     for (let i=1;i<=n;i++){
//         total += i;
//     }
//     return total
// }

// let t1 = performance.now()
// add(10000000000)
// let t2 = performance.now()
// console.log(`time ${(t2-t1)/1000} seconds`);





function addTwo(n) {
    return n*(n+1)/2;
}

// console.log(addTwo(3));
let t3 = performance.now()
addTwo(10000000000)
let t4 = performance.now()
console.log(`time ${(t4-t3)/1000} seconds`);


// faster (diffrent machines will recode different time)
// less memory-intensive
// more readble



// big O is just a way of formalized, fuzzy counting.
// It allows us to talk in a very formal way about how the runtime of an algorithm grows as the inputs

//O(n^2) Quadratic Time Complexity
// O(n)   Linear Time Complexity
// O(1)  Constant Time Complexity


// auxiliary spacecomplexity 


// logarithm