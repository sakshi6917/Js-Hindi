function SetUsername(username){
//complex DB calls 
this.username=username
console.log("called");

}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email
    this.password =password
}
const chai=new createUser("kartik","kartik45@gmail.com","123")
console.log(chai);
console.log("sakshi");

