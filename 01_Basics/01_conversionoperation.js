age=40
console.log(age)
age="46"
let ageInNumber=Number(age)
console.log(ageInNumber)
console.log(typeof(ageInNumber))
// age="46stf" (prints NAN when converted into a number)
// age="" (prints 0 when converted into a number)
 age="43sdi"//prints NAN when converted into a number

 
let ageinNumber=Number(age)
console.log(typeof(ageinNumber));

console.log(ageinNumber)//this prints NAN=>means not a number
/*
 "46"=>46
 ""=>prints 0 
 "46aui"=>NAN
 false=>0,true=>1
 "faise","true"=>NAN
 */

 let isLoggedIn=30
 let booleanIsLoggedIn=Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);
 /*
 1=>true
 "sakshi"=>true
 ""=>false
 "46"=>true
 56=>true
 null=>false
 undefined=>false
 */

 let someNumber=1
 let stringSomeNumber=String(someNumber)
 console.log(stringSomeNumber)
 console.log(typeof(stringSomeNumber))
 /*
 2=>2
 true=>true
 0=>0
 */
 
 //*********************Operations************************ 
 let num=4
 let negValue=-num
 console.log(negValue);
 console.log(2+3);
 console.log(2-3);//-1
 console.log(2*3);
 console.log(2/3);//this gives value in decimal not integer i.e, 0.6666666
 console.log(2**3);//2 power 3
 console.log(2%3);

 str1="Hello"
 str2=" Sakshi"
 str3=str1+str2
 console.log(str3)
 console.log("1"+2)
 console.log(1+"2")
 console.log("2"+4+8)
 console.log(2+4+"8")
 console.log("1"+"2")
//  console.log(true+)  =>not allowed,gives error
console.log(+true);
console.log(+false);
console.log(+0);
console.log(+1);
console.log(+"");
console.log(+"null");
console.log(+null);
console.log(+"undefined");
console.log(+undefined);

console.log("hello");


// comparisons
console.log("2"<1);    //js automatically changes string to number for comparison
console.log("2"==2);
console.log("02"<=2);
console.log("2"<=1);
console.log("2"!=1);
console.log(null<0);
console.log(null==0);
console.log(null>=0);
/* ==  and comparisons(<,>,<=,>=) work differently
comparisons convert null to 0 
*/
console.log("hello");
console.log(undefined<0);
console.log(undefined==0);
console.log(undefined>=0);
console.log("hello");

console.log("5"==="5");  //(strict check)compares data type as well as numbers
console.log(5===5);





 
 

 

 
 



