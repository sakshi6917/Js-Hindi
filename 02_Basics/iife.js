// Immediately Invoked Function Expression
(function play(name) {
    console.log(`${name} time to play!`);

})('Priya');

((name) => {
    console.log(`Hi! This is ${name}`);

})('Sakshi');

(function printTheNumber(num)
{
console.log(num);

})(24);

((num1,num2)=>(console.log(num1+num2)))
(3,4);