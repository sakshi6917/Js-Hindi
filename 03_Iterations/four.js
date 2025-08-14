//****************  For in loop  ***************** */
//finding keys and values in object and array works same
const myObject={
    Js:"Javascript",
    Py:"Python",
    Cpp:"C++"
}

for(const key in myObject)
{
    console.log(key);
    
}
console.log("hello");

for(const key in myObject)
{
    console.log(myObject[key]);
    
}
console.log("hello");

for (const key in myObject) {
    console.log(`${key} is short for ${myObject[key]}`);
    
}

const myArray=["java","python","cobol","ruby"]
for(const key in myArray)
{
    console.log(key);
    
}
for (const key in myArray) {
    console.log(myArray[key]);
    
}

const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('GER','Germany')
map.set('IN','India')                 //Map prints only distinct entries, since it is repeated it is not printed
// console.log(map);
for(const key in map)
{
    console.log(key);    //prints nothing
    
}