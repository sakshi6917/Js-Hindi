const userEmail = ""
if (userEmail) {
    console.log("Got user email");

}
else {
    console.log("Dont't have user email");

}

const arr = []
if (arr.length == 0)
    console.log("Empty array");


const anyObject = {}
if (Object.keys(anyObject).length == 0)           //since "Object.keys()" function returns keys names as an array so we used "length" method here
{
    console.log("Object is empty");

}


//falsy values=>  0,-0,false,"", BigInt 0n,null,undefined,NaN
//truthy values=> " ",[],{},function(){},"0","false"  (anything other than falsy values are truthy values)


console.log(false == 0);
console.log(false == "");
console.log(0 == '');
console.log(null <= 0);


//  ******Nullish Coalescing Operator*******
let val1;
// val1= null??10             =>print 10
// val1=5??3                  =>print 5
// val1=undefined??3           // =>print 3
val1 = null ?? 2 ?? 4               //prints 2
console.log(val1);


//     ************Ternary Operator*********
const price = 100
price >= 50 ? console.log("Price is greater than 50") : console.log("Price is less than 50");
