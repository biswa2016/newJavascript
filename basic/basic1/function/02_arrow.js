// arrow function

const user = {
  name: "biswa",
  price: 999,
  msg: function () {
    console.log(`${this.name} welcome to website`);
  },
};

user.msg();
user.name = "sam";
user.msg();

function one() {
  this.name = "ram";
  // console.log(this);
}

one();

const chai = function () {
  //   console.log(this);
};

chai();

const two = () => {
  console.log(this);
};

two();

const three = (num1, num2) => {
  return num1 + num2;
};

console.log(three(1, 2));

const four = (num1, num2) => num1 + num2;
console.log(four(2, 4));

const five = (num1, num2) => (num1 * num2);

console.log(five(5,3));

const userDetails = () => ({user:"biswa"});

console.log(userDetails());

const myArr = [1,2,3,4,5,6,7]

myArr.forEach(function (){

})

myArr.forEach(()=>{})

myArr.forEach(()=>(1+3))

