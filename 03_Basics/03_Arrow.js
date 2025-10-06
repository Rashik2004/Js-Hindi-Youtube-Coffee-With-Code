//we use this variable to create and access the current context inside the scope or it refers to the current context


//const username={
//    username:"Rashik",
//    price:899,
//    welcomeMessage: function (){
////        console.log(`${this.username} welcome to website`);
//        console.log(this);
//    }
//}
//username.welcomeMessage()
//username.username="sam"
//username.welcomeMessage()
//console.log(this);

//function chai(){
//    let username1="Rashik"
//    console.log(this.username);
//}
//chai()


const chai = function (){
    let username1="priyanshu";
    console.log(this.username1)
}

//now we will write the same function using arrow function(=>)
chai()

