/**
 * Que1 : sum of all natural numbers from 1 to n
 */

// sum of 1 to 5 : 15

function sum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum;
}

// console.log(sum(5)); // 15
// console.log(sum(10)); // 55

function sum2(num) {
    return num * (num + 1) / 2
}

// console.log(sum2(5)); // 15
// console.log(sum2(10)); // 55



/**
 * Question 2: sum of digit of a number
 */

// 1287 (1+2+8+7) = 18

// approach : 1287 % 10 , reminder = 7+8+2 q = 128 %10, reminder = 8, q= 12 % 10 


function sumOfDigit(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// console.log(sumOfDigit(1287)); //18


/**
 *  Question3 : count the number of digit of a number
 */

// 34252 (5)

function countDigit(num) {
    let count = 0;
    num = Math.abs(num);
    do {
        count++;
        num = Math.floor(num / 10)
    } while (num > 0);
    return count;
}

console.log(countDigit(121)); //3
console.log(countDigit(34252)); //5
console.log(countDigit(-121)); //3



