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

function chai(){
    console.log(this);
}
chai()