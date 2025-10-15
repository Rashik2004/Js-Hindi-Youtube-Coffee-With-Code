//we use this variable to create and access the current context inside the scope or it refers to the current context
//this function tells us about the current context of a variable

//const username={
//    username:"Rashik",
//    price:899,
//    welcomeMessage: function (){
////        console.log(`${this.username} welcome to website`);
//        console.log(this);
//    }
//}


// we can use this function to access the variable current context but inside the scope declaration only outside the scope we can use it.

//username.welcomeMessage()
//username.username="sam"
//username.welcomeMessage()
//console.log(this); //this will have two output one is inside node env and the otherone is inisde the browser engine.
//in node env we will se the empty object but inside the browser console we will see the window object...

//function chai(){
//    let username1="Rashik"
//    console.log(this.username);
//}
//chai()

//we cannot use "this" inside a function it can only be

//const chai = function (){
//    let username1="priyanshu";
//    console.log(this.username1)
//}

//now we will write the same function using arrow function(=>)

//const variable = (value1,value2)=>{
//    //we can pass value on declaration or on runtime.
//}

//const chai=()=>{
//    let username1="priyanshu";
//    console.log(this.username1)
//}
//chai()

//const  addtwo=(num1,num2)=>{
//    return num1+num2;
//}
//console.log(addtwo(4,6))

//const  addtwo=(num1,num2)=> (num1+num2); //this kind of function will be used max times in react
//console.log(addtwo(5,6))

//const  addtwo=(num1,num2)=> ({username: "rashik"});
//console.log(addtwo())


//*********************************************these examples are given by the deepseek ai and explained with example.
//The 4 Rules of this Binding

//Rule 1: Default Binding (Standalone Function Call)
//        javascript
//function showThis() {
//    console.log(this); // In browser: Window object
//}                      // In Node.js: global object
//showThis();            // In strict mode: undefined


//// Example with variable
//var name = "Global Name";
//function getName() {
//    console.log(this.name); // "Global Name" (non-strict mode)
//}
//getName();
//


////        Rule 2: Implicit Binding (Method Call)
////        javascript
//
//
//const user = {
//    name: "Alice",
//    greet: function() {
//        console.log(`Hello, ${this.name}!`); // "Hello, Alice!"
//    },
//    address: {
//        city: "Paris",
//        showCity: function() {
//            console.log(this.city); // "Paris" - refers to immediate object
//        }
//    }
//};
//
//user.greet(); // ✅ 'this' = user object
//user.address.showCity(); // ✅ 'this' = address object
//
//
////        Rule 3: Explicit Binding (Using call, apply, bind)
////        javascript
//
//
//const person1 = { name: "John" };
//const person2 = { name: "Jane" };
//
//function introduce(age, country) {
//    console.log(`I'm ${this.name}, ${age} years old from ${country}`);
//}
//
//// call() - immediate execution with arguments
//introduce.call(person1, 25, "USA"); // "I'm John, 25 years old from USA"
//
//// apply() - immediate execution with array of arguments
//introduce.apply(person2, [30, "Canada"]); // "I'm Jane, 30 years old from Canada"
//
//// bind() - returns a new function with bound context
//const boundFunction = introduce.bind(person1, 25);
//boundFunction("UK"); // "I'm John, 25 years old from UK"
//
//
////        Rule 4: new Binding (Constructor Functions)
////        javascript
//
//
//function Car(brand) {
//    this.brand = brand;
//    this.start = function() {
//        console.log(`${this.brand} is starting...`);
//    };
//}
//
//const myCar = new Car("Toyota");
//myCar.start(); // "Toyota is starting..." - 'this' = newly created object
//
//
////        2. Arrow Functions - Special Case
////        Arrow functions don't have their own this - they inherit from parent scope:
//
//javascript
//const obj = {
//    name: "Bob",
//    regularFunction: function() {
//        console.log(this.name); // "Bob" - 'this' = obj
//    },
//    arrowFunction: () => {
//        console.log(this.name); // undefined - 'this' = outer scope (window/global)
//    },
//
//    // Common use case for arrows
//    delayedGreet: function() {
//        setTimeout(() => {
//            console.log(`Hello, ${this.name}!`); // "Hello, Bob!" - inherits from delayedGreet
//        }, 1000);
//    },
//
//    brokenDelayedGreet: function() {
//        setTimeout(function() {
//            console.log(`Hello, ${this.name}!`); // "Hello, undefined!" - own 'this'
//        }, 1000);
//    }
//};
//
//obj.regularFunction();
//obj.arrowFunction();
//obj.delayedGreet();
//obj.brokenDelayedGreet();


