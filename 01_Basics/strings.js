 const name ="Sakshi"
 console.log(name[1]);
 
const newName= new String('sakshi')
console.log(newName[0]);
console.log(newName[7]);
console.log(`Hey, my name is  ${newName}`);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.indexOf('k'));
console.log(newName.charAt(4));
console.log(newName.substring(0,4));
//or
//const newString=newName.substring(0,4)
console.log(newName.slice(-6 ,3));
const newString="   ritika  "
console.log(newString);
console.log(newString.trim());
const url="https://codewith%20harry.com"
console.log(url.includes('ode'));//searches for ode in the string url
console.log(url.replace('%20','-'));
console.log(url.split('-'));





