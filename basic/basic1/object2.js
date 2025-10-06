// single ton

const tinderUser = new Object();

tinderUser.id = "101abc";
tinderUser.user = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); { id: '101abc', user: 'sam', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstname: "biswa",
      lastname: "nayak",
    },
  },
};

// console.log(regularUser);
//  {
//     email: 'some@gmail.com',
//     fullName: { userfullname: { firstname: 'biswa', lastname: 'nayak' } }
//   }

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);
console.log("spreed",{ ...obj1, ...obj2 });


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));


