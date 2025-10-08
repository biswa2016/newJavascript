class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`UserName is ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName,email,password){
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course was add by ${this.userName}`);
        
    }

}

let chai = new Teacher("kunu", "kunu@fb.com","12434");
chai.addCourse()
chai.logMe()
console.log(chai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

let tea = new User("tom");
tea.logMe()
console.log(tea);
