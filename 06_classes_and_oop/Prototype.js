let myName="sakshi     "
// console.log(myName.trim().length);
// console.log(myName.trueLength());
let myHeroes=["Cindrella","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.sakshi=function(){
    console.log(`sakshi is present in all objects`);
    
}
Array.prototype.heySakshi=function(){
    console.log(`Sakshi says hello`);
    
}
console.log(heroPower.sakshi());
console.log(myHeroes.heySakshi());
// console.log(heroPower.heySakshi());     //shows not a function


//Inheritance
const User={
    name:"chai",
    email:"chai@gmai.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"JA Assignment",
    fullTime:true,
    __proto__:TeachingSupport               //one way to set prototype
}
Teacher.__proto__=User                      //another way
//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
let anotherUsername="ChaiAurCode   "
String.prototype.truelength=function(){
    // console.log(`${this}`)
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.truelength()
"kartik".truelength()
"sakshi".truelength()








