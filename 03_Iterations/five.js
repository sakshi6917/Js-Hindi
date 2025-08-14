//************    forEach()   *********** */

const myArray = ["java", "python", "cobol", "ruby", "cpp"]

myArray.forEach(function(key){
console.log(key);

})
console.log("***********");

// myArray.forEach((val)=>{val})          //remember this doesn't  print any value as here inside {} new scope is started
myArray.forEach((val)=> {console.log(val)}  )       //  OR   myArray.forEach((val)=>(val))


console.log("************");

function printMe(item)
{
    console.log(item);
    
}
myArray.forEach(printMe)

myArray.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})


//AN ARRAY OF OBJECTS
const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    },
    {
        languageName: "cpp",
        languagefileName: "c++"
    },

]
// myCoding.forEach((item)=>{console.log(item.languagefileName);
// })
// myCoding.forEach((item)=>{console.log(item.languageName);
// })
myCoding.forEach((item)=>{console.log(item.languageName);
})
myCoding.forEach((item)=>{console.log(item.languagefileName);
})