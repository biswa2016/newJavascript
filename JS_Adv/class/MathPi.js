const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
console.log('descriptor',descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const myNewObj = Object.create(null)
myNewObj.name ="kunu"
myNewObj.price =299
myNewObj.order =function() {
    console.log('going');
    
}
console.log(Object.getOwnPropertyDescriptor(myNewObj,"name"));
Object.defineProperty(myNewObj,'name',{
    writable: false,
  enumerable: false,
  configurable: false
});
console.log(Object.getOwnPropertyDescriptor(myNewObj,"name"));
const chai ={
    name:"ginger"
}
console.log(chai);

for (const [key,value]of Object.entries(myNewObj)){
    if(typeof value !== 'function'){
        console.log(key,value);
    }
    
}

