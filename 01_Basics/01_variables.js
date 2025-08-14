console.log("Sakshi")
const v=26
let customerName="Prateek"
let customerState;//this means the value of this variable is not defined and can be inserted later
var customerCity="Lucknow"
/*
never try to use var because of functional scope, it changes the value everywhere 
 */
//v=57 variable with "const" keyword cant be changed
customerName="Radha"
customerCity="Kolkata"
console.table([v,customerName,customerCity,customerState])
