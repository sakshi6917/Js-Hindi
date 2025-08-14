//******************   Map   ***************** */

const myNums = [1, 4, 2, 5, 3, 6, 7, 10, 8, 9]
// const newNums=myNums.map((num)=>{num+10})                 //this prints undefined due to missing keyword 'return' inside {}
// const newNums=myNums.map((num)=>num+10)                     //const newNums=myNums.map((num)=>{return num+10})

const newNums=myNums.map((num)=>(num+2)).                 //this is called chaining
filter((num)=>(num>4 && num<10)).
map((num)=>(num*10))

console.log(newNums);
