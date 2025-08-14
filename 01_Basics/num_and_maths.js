const num=180
console.log(num)
const balance=new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(typeof(balance))
const score=new Number(200)
console.log(score.toString());
console.log(score.toString().length);
console.log(score.toFixed(3));
const number=24.8351
console.log(number.toPrecision(1));
const hundreds=1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
//************maths***************** */
console.log(Math);
console.log(Math.abs(-0));
console.log(Math.round(-0.9));
console.log(Math.round(0.9));
console.log(Math.ceil(0.1));
console.log(Math.floor(4.9));
console.log(Math.max(4,9,0,30,2));
console.log(Math.min(4,9,0,30,2));
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);
const min=11
const max=22
console.log(Math.floor(Math.random()*(max-min+1))+min);
