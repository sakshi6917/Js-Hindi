function addTwoNumbers(num1, num2) {
    return num1 +num2;
}
// const res = addTwoNumbers(1, "3")                    //this prints 13
const res = addTwoNumbers(1, "3")
console.log("Result is:", res);

function loginUserMessage(username="smriti"){            //takes dafault value as smriti
    if(!username)
    {
        return `please enter a valid username`     //dekh na help karke show off kie hue hai       
    }else 
    return `${username} just logged in!`
}
// console.log(loginUserMessage(""))              => REMEMBER this prints "please enter a valid username"
console.log(loginUserMessage())                //this also prints if condition
console.log(loginUserMessage("sakshi"));




//passing object as parameter
const user={
    name:"kartik",
    id:324
}

function handleMyObject(anyObject)
{
console.log(`User name is ${anyObject.name} and id is ${anyObject.id}`);

}
handleMyObject(user)
// handleObject(user)
// handleObject(
//     {
//         username:"Fatima",
//         price:299
//     }
// )


//passing an array as parameter
const myArray=[2,5,6,10]
function returnSecondValue(takeArray){
    return takeArray[2]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([234,65,12,46]));



// functio calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(434,287,622,233,1093));       //Only prints 434
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(434,287,622,233,1093));
// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(434,287,622,233,1093));       //val1 takes value 434 and val2 takes 287 & rest in num1




//Scope
const a=29
if(true)
{
    const a=18
    const b=3
    var c=2
    console.log("INNER a:" ,a);
    
}
console.log(a);
// console.log(b);
console.log(c);       //out of scope of function where it's defined, still prints 2

function one()
{
    const username="sakshi"
    function two()
    {
        website="youtube"
        if(username==="sakshi")
        {
console.log(username);
console.log(username+website);

        }
    }
    // console.log(website);
    two()
    
}
one()

console.log(addOne(5))         //here we can call a function before its definition
function addOne(num)
{
    return num+1
}


// console.log(addTwo(7))          //here we can't use a fuction before its definition
const addTwo=function(num)
{
    return num+2
}
console.log(addTwo(7));

