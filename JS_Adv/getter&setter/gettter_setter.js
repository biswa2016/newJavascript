class User{
    constructor(email,password){
       this.email = email;
       this.password = password;

    }
    get email(){
        return `${this._email}`
     }

     set email(value){
        this._email = value
     }

    get password(){
       return `${this._password}kunu`
    }

    set password(value){
       this._password = value
    }
}

const kunu = new User("k@nuu.com","123abc")

console.log(kunu.password);
console.log(kunu.email);
