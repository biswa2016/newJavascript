// promise is a object represent eventual completion or failure of an asynchronous operation
// three sate : pending , resolve , rejected

const PromiseOne = new Promise((resolve,reject)=>{
    // Do as async task (DB call, cryptography, network,file)
    setTimeout(()=>{
        console.log('Async task complete');
        resolve()
    },1000)
});

PromiseOne.then(()=>{
console.log('promise consumed');
}).catch((err)=>{
    console.log(err);
});

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task 2');
        resolve()
    },1000)
}).then(()=>{
    console.log('Async 2 resolve');
})


const promiseThree = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve({name:"biswa",email:"biswa@google.com"})
   },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({name:"biswa",email:"biswa@google.com"});
        }else{
            reject('ERROR : something went wrong');
        }
    },1000)
})

promiseFour.then((user)=>{
  console.log('2',user);
  return user.name
}).then((username)=>{
     console.log(username);
})
.catch((err)=>{
   console.log(err); 
}).finally(()=>{
    console.log('promise will reject and resolved');
})

const promiseFive  = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({name:"biswa",email:"biswa@gmail.com"});
        }else{
            reject('ERROR : JS async await went wrong'); 
        }
    },1000)
})

async function consumed(params) {
    try{
      const resp = await promiseFive;
      console.log(resp);
    }catch(err){
      console.log(err);
    }
  
}

consumed();



// async function getAllUser(params) {
//     try{
//         const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await resp.json()
//         console.log(data,'data');
//     }catch(err){
//       console.log(err,'err');
//     }    
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
   return res.json()
}).then((allUser)=>{
   console.log(allUser);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("end");
})