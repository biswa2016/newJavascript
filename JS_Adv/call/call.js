function setUsername(userName){
   this.userName = userName
   console.log("called");
   
}

function createUser(userName,email,password){
    setUsername.call(this,userName)
    this.email = email;
    this.password = password;
}

let user = new createUser("kunu","kunu@fb.com","1234")
console.log(user);
