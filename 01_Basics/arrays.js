const array=[1,3,5,2,7,5,"sakshi",true,null]
console.log(array);
console.log(array[8]);
console.log(array[6]);


//ARRAY METHODS
array.push(10)
array.push(0)
console.log(array);
array.pop()
console.log(array);
console.log(array.includes('sakshi'));
console.log(array.indexOf(true));
array.unshift(8);
console.log(array);
array.shift()
console.log(array);

const myArray=array.join()
console.log(myArray);
console.log(typeof myArray);

//slice,splice
const newArray1=array.slice(2,6)
console.log(newArray1);
console.log(array);
const newArray2=array.splice(2,6)    //start from index 2 and remove 6 elements(including 2)
console.log(newArray2);
console.log(array);

//ADD TWO ARRAYS
const movies=["Krish","Spiderman","Batman"]
const actors=["Salman","Shahrukh","Hritik"]
// movies.push(actors)
console.log(movies);
const myMovies=movies.concat(actors)
console.log(myMovies);
const allMovies=[...movies,...actors]
console.log(allMovies);


//Printing an array within an array
const num=[3,5,2,[2,1],[4,9,[3,8]]]
console.log(num);
const newNum=num.flat(Infinity)
console.log(newNum);

//Some more methods
console.log(Array.from("saks-shi45"));
console.log(Array.from("sakshi"));
console.log(Array.isArray("kartik"));
console.log(Array.isArray(123));
console.log(Array.isArray([3,4]));
console.log(Array.isArray({name:"kartik"}));
console.log(Array.from({name:"kartik"}));

const score1=100
const score2=400
const score3=300
console.log(Array.of(score1,score2,score3));













