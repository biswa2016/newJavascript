const user ={
    name:"kunu",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got user Details from database");
        console.log(`UserName ${this.name}`);
        console.log(this);
        
        
    }
}

console.log(user.name);
console.log(user.getUserDetails());
console.log(this);


// const promiseOne = new Promise()
const date = new Date()

function UserDetails(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = new UserDetails('son',8,true);
const userTwo = new UserDetails('dat',10,false);

console.log(userOne);
console.log(userTwo);




