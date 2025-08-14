let myDate=new Date()
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate=new Date(2023,2,21);
// let myCreatedDate=new Date(2023,2,14,6,3);
// let myCreatedDate=new Date("2023-1-14");
let myCreatedDate=new Date("1-14-25");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
newDate.toLocaleString('dafault',{
    weekday:"long"
})






