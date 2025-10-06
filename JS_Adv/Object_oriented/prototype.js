// let myName = "Biswa   ";

// console.log(myName.length);
// console.log(myName.trueLength);

 
let myHero = ["thor", "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.biswa = function(){
    console.log(`biswa is present in all object`);
}
Array.prototype.heyBiswa = function(){
    console.log(`biswa say hello`);
    
}
heroPower.biswa()
myHero.biswa()
// heroPower.heyBiswa()
myHero.heyBiswa()


// inheritance
const User = {
    name :"kunu",
    email : "kunu@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'Js assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

console.log('TASupport',TASupport);
console.log("Teacher",Teacher);

//modern Syntax

Object.setPrototypeOf(TeachingSupport ,Teacher)


let anotherUser = "Biswa Ranjan   ";

String.prototype.trueLength = function(){
    console.log(this);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUser.trueLength();
"Kunu".trueLength()
