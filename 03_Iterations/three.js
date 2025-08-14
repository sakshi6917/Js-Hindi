//           *****************FOR OF LOOP*******************
//In Arrays
const myArray=[4,2,7,1,9]
for(const num of myArray){
    console.log(num);
    
}
console.log('*');

for(const key of myArray)
{
    console.log(key);    //this also prints 4,2,7,1,9 not the index
    
}

//In Strings
const greeting="Hello Sakshi"
for(const greet of greeting)
{
    console.log(greet);
    
}


//*************MAPS************* */
const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('GER','Germany')
map.set('IN','India')                 //Map prints only distinct entries, since it is repeated it is not printed
console.log(map);

for(const key of map)
{
    console.log(key);                 //this prints keys along with values
}

           
for (const [key] of map) {
    console.log(key);              //this prints keys along with values
    
}
for (const [key,value] of map) {
    console.log(key, ':',value);              
    
}
