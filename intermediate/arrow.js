// this key word


const user = {
    username: "biswa",
    price: 999,
    welcome: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);


    }
}

// user.welcome()
// user.username ="sam",

// user.welcome();

// console.log(this); // {}



// function one(){
//     let name = "biswa"
//     console.log(this.name);

// }

// one();


/// Arrow function


// const chai = function(){
//     let name = "biswa"
//     console.log(this.name);
// }
const chai = () => {
    let name = "biswa"
    console.log(this); // {}
}

// chai();  s


// const two = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return

// const two = (num1, num2) => num1 + num2

// const two = (num1, num2) => (num1 + num2) 

// if you wanted to return a object
const two = (num1, num2) => ({ username: "biswa" })

console.log(two(2, 3))


const arr = [1, 2, 3, 4, 5, 6]

arr.forEach(function (arr) {
    console.log(arr);
})

// or


arr.forEach((el)=>{
    console.log(el);
})




