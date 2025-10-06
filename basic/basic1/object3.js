// destructuring

const course = {
  name: "js",
  price: 3500,
  courseInstructor: "biswa",
};

const { courseInstructor } = course;

console.log(courseInstructor);

const { courseInstructor: instructor } = course;
console.log(instructor);

