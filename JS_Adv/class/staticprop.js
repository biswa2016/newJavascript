class User{
    constructor(userName){
        this.userName =  userName
    }

    logMe(){
        console.log(`UserName : ${this.userName}`);
        
    }

    static createId(){
        return `123`
    }

}

const user = new User("biswa");
// console.log(user.createId());

class Teacher  extends User{
    constructor(userName,email){
        super(userName)
        this.email = email
    }


}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()
console.log(iphone.createId());