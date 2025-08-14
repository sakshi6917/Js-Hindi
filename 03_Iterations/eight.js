//*******************  Reduce  ****************** */


const myNumbers=[1,2,3,4,5]
// const newNums=myNumbers.reduce(function(accumulator,currentvalue) {return accumulator+currentvalue},0)       =>prints 55
// const newNums=myNumbers.reduce((accumulator,currentvalue) =>{return accumulator+currentvalue},0)             =>prints55


const addNums=myNumbers.reduce((acc,currval)=>{
    console.log(`acc:${acc} and currval:${currval}`);
    
    return acc+currval},0)
console.log(addNums);                   //15
console.log("hello");


const newNums=myNumbers.reduce((accumulator,currentvalue) =>(accumulator+currentvalue),0)
console.log(newNums);                        //15


const newtotal=myNumbers.reduce((acc,currval)=> acc+currval,0)
console.log(newtotal)                               //15

const shoppingCart=[
    {
        course:"Javascript",
        price:2999
    },
    {
        course:"Python",
        price:999
    },
    {
        course:"Mobile Development",
        price:5999
    },
    
    {
        course:"Data Science",
        price:12999
    },
]

const pricetoPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
// shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetoPay);
