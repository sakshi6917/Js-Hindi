const user={
    username:"sakshi" ,
    loginCount:5,
    signedIn:true, 
    getUserDetails:function(){
        console.log("Got user details from database");
        console.log(`Username:${this.username}`);
        console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function()
    {
        console.log(`Welcome ${this.username}`);
        
    }
    return this;         //this is implicitly returned(i.e, it will return even if we don't write "return this")
}
// const user1= User("Shikha",12,true)
// const user2= User("Mohan",8,false)      //this overwrites userOne ,so use "new" keyword before User
// console.log(user1);                     //printsMohan,8,false
const user1=  new User("Shikha",12,true)
const user2= new User("Mohan",8,false)     
console.log(user1.constructor);                //a reference to itself,i.e User    
console.log(user2);    

//    new KEYWORD    //
// 1. every time a new object with empty parethesis is created
// 2. constructor function is called due to 'new' keyword which packs all the arguments & give it to us
// 3. all arguments are injected inside 'this' keyword
// 4. function is provided to us with the arguments

//study instance of in javascript


