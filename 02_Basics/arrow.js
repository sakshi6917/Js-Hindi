const user={
    username:"sakshi",
    price:399,

    welcomeMessage:function(){
console.log(`${this.username} just logged in!`);
console.log(this);


    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this);

// function Chai(){
//     console.log(this);
    
// }
// function chai()
// {
//     const age =40
//      username="poonam"
//     console.log(this.username);
//     console.log(this.age);
    
// }
const chai=()=>{
    username="preety"
    console.log(this);
    
}
chai()

console.log("hello");

// const addTwoNumbers= (num1,num2)=> {
//     return num1+num2
// }
// console.log(addTwoNumbers(4,6));
const addThree=(num1,num2,num3)=> num1+num2 +num3     //or   const addThree=(num1,num2,num3)=>(num1+num2+num3)
console.log(addThree(4,6,6))


const addTwoNumbers=(num1,num2)=>({username:"sakshi"})
console.log(addTwoNumbers(3,6))