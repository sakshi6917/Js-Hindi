//IF and else if

let temperature = 42
if (temperature === 42) {
    console.log("Temperature is less than 50");

}
else
    console.log("Temperature is greater than 50");
let score = 200
if (score > 100) {
    const power = 'fly'
    console.log(`Power is ${power}`);

}
// console.log(`Power is ${power}`);      //out of scope of if where it is defined

const balance=600
if(balance<500)
{
    console.log("Less than 500");
}
else if(balance<900)
{
    console.log("Less than 900");
}
else if(balance<1200)                   //this will be printed as default if you use else
{
    console.log("Less than 1200");
}

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard && 3===3) {
    console.log("Allowed to buy course");

}
if (userLoggedIn || debitCard || 3==="3") {
    console.log("Allowed to buy course");

}


//                                *******************SWITCH***********************
let month=5
switch(month)
{
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        // break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    default:
        console.log("Invalid month");
        
}

const name="sakshi"
switch(name){
case"prateek":
console.log("hello,prateek!");
break;
case"sakshi":
console.log("hello,sakshi!");
break;
case"diana":
console.log("hello,diana!");
break;
default:
console.log("hello,user!");
break;
}