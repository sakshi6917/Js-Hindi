const promiseOne=new Promise(function(resolve,reject){
//Do an async task
//DB calls,cryptography,network
setTimeout(function(){
    console.log('Async task is completed');
    resolve();
},1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
    
})



new Promise(function(resolve,reject){
    setTimeout(function()
{ 
     console.log('Async task 2 is completed');
    resolve();
},1000)    
}).then(function(){
    console.log('Async 2 resolved');
})



const promiseThree=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        resolve({username:"Sakshi",email:"sakshi23@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})



const promiseFour=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error=true
        if(!error)
        {
            resolve({username:"kartik",email:"kartik45@gmail.com"})           //this will be printed when there is no error
        }
        else
        {
            reject('ERROR: Something went wrong')          //this will be printed when there is error
        }
    },1000)
})

// const username=promiseFour.then(function(user){
// console.log(user);
// return user.username;
// })
// console.log(username);
promiseFour.then(function(user){                     // all of then(),catch() and finally uses callback function
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);  
}).catch(function(error){
console.log(error);
}).finally(()=>{
    console.log('The promise is either resolved or rejected');
    
})



const promiseFive=newPromise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error)
            resolve({username:"jasvascript",password:"123"});
        else
            reject('ERROR:JS went wrong')
            
    },1000)
})

