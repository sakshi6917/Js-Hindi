//OBJECTS
//Singleton object=> const user=new Object{}
const num=Symbol('123')
//Object literal
const obj={
    name:"Sakshi",
    fullname:{
        userfullname:{
            firstname:"Sakshi",
            lastname:"Kumari"
        }
    },
    [num]:"mynum",
    age:45,
    email:"sakshi42@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Thursday"],
    greeting:function(){
        console.log("hello world");
        
    },
    greeting2:function(){
        console.log(`hello js user ${this.name}`);
        
    }

}
console.log(obj.name);
console.log(obj["fullname"]);
console.log(obj.fullname);
console.log(obj.fullname.userfullname);
console.log(obj.fullname.userfullname.lastname);
console.log(obj[num]);
console.log(obj.age);
console.log(obj.lastLoginDays);
console.log(obj.greeting());
console.log(obj.greeting2());
console.log(obj.isLoggedIn);


//Combining two Objects
const obj1={1:"fs",2:"et"}
const obj2={3:"re",4:"uw"}
// const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)   //first thing in assing is target and next others are source
console.log(obj3);
const object3={...obj1,...obj2}
console.log(object3);

//Array of Objects
const users=[
    {id:1,
        email:"sakshi23@gmail.com"
    },
    {id:2,
        email:"sak3@gmail.com"
    },
    {id:1,
        email:"kar@gmail.com"
    },
    {id:1,
        email:"kartik@gmail.com"
    },
    {id:1,
        email:"kartik34@gmail.com"
    },
    {id:1,
        email:"suu3@gmail.com"
    },
]

console.log("hello");

console.log(users[1].email);
console.log(users[5].email);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.hasOwnProperty('greeting'));



//Object de-structuring
const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}

const {courseInstructor}=course
console.log(instructor);

const {price:newPrice}=course
console.log(newPrice);











