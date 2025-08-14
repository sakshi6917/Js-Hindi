//*************   Filter    ************ */

// const myArray = ["java", "python", "cobol", "ruby", "cpp"]
// const values=myArray.forEach((item)=>{
//     // console.log(item);
//     return item
    
// })
// console.log(values);

const nums=[1,2,3,4,5,6,7,8,9,10]
const printNums=nums.filter((num)=>(num<=4))
console.log(printNums);


const myNums=[2,4,1,5,3,6,8,9,10]
// const newNums=myNums.filter((num)=> num>4)                    //newNums=myNums.filter((num)=>{return num>4})
// console.log(newNums);


const newNums=[]                                     //same thing using forEach()
myNums.forEach((num)=>{
    if(num>=4)
    {
        newNums.push(num);  
    }
})
console.log(newNums);


const books=[
    {
        title:'Book One',genre:'Fiction',Publish:1981,edition:2004
    },
    {
        title:'Book Two',genre:'Non-Fiction',Publish:1992,edition:2008
    },
    {
        title:'Book Three',genre:'History',Publish:1999,edition:2007
    },
    {
        title:'Book Four',genre:'Science',Publish:1989,edition:2010
    },
    {
        title:'Book Five',genre:'Non-Fiction',Publish:2009,edition:2014
    },
    {
        title:'Book Six',genre:'Fiction',Publish:1987,edition:2010
    },
    {
        title:'Book Seven',genre:'History',Publish:1986,edition:1996
    }
]
let userBooks=books.filter((bk)=>{return bk.genre==='History'})         //prints Book Three and Book Seven
 userBooks=books.filter((bk)=>{return bk.genre==='History' && bk.edition==1996})
console.log(userBooks);




userBooks=books.filter((book)=>(book.title=="Book Six"))
console.log(userBooks);
