const tinderUser = new Object(); //singleton
// const tinderUser = {}; //non-singleton 

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstName: "biswa",
            lastName: "nayak"
        }
    }
}

console.log(regularUser.fullname?.userFullName);


let obj1 = {
    1: "a",
    2: "b"
}

let obj2 = {
    3: "c",
    4: "d"
}
let obj4 = {
    5: "c",
    6: "d"
}

// const obj3 = {
//     obj1, obj2
// }

// const obj3 = Object.assign({},obj1,obj2,obj4);
const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


/// Destructuring ///


const cource = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "biswa"
}


const { courseInstructor:instructor } = cource

console.log("courseInstructor",instructor);

