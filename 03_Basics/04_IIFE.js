//IIFE - Immediately Invoked function expressions
//the function which immediately get executed but these is problem with the pollution of the global scope and to remove that from the global var we use IIFE


//function chai(){
//    console.log(`database coonected`);
//}
//chai()

//(function chai(){
//    console.log(`database coonected`);
//})();

//()() here the first parenthesis is a for where we will write the function definationa and the second parenthesis is to handle for execution call.

( (name) => {
    console.log(`Database Connected to ${name}`)
} )('Rashik');