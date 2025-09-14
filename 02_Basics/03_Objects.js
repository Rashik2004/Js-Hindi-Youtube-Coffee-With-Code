//singleton
//when ever there are object literals than it cant be singleton
//when we create using constructor then we create singlton .

//Object Literals
const mySyb=Symbol("Key1") // Syntax to declare a Symbol


const JsUser={
    name:"Rashik",
    age:21,
    Locaton: "Jamshedpur",
    State: "Jharkhand",
    emial:"rashbianry@areole.dev",
    [mySyb]:"rashik", //this is how we include the symbol into a object (this [] is also called symbol keys)
}

//console.log(JsUser.name);
//console.log(JsUser["Locaton"]);
//console.log(JsUser[mySyb]);
//
////chnaging the value of the variable
//JsUser.name="Priyanshu Ghosh";
//Object.freeze(JsUser)
//
//JsUser.name="andu pandu";
//console.log(JsUser)
JsUser.greeting=function (){
    console.log("Hello newbie js user");
}

JsUser.greetingTwo=function (){
    console.log(`Hey Rashik , ${this.name}`);//this methord of backticks is called string interpolation;
}

//console.log(JsUser.greeting) //[Function (anonymous)]
console.log(JsUser.greeting())  //Hello newbie js user (undefined)

console.log(JsUser.greetingTwo())