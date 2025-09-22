//let c =300;
//if (true){
//    let a=10
//    const b=20
////    var c=30;
//    let c=30
//    console.log("inner",a);
//}

//I. anything inside a scope is called a block scope;
//II. anything outside a scope is called global scope;
//III. chceking the scope in windows console or browser console is different from that of checking the scope in node envirounment; ()
//IV. the let and const can only be accessed inside the scope.
//V. closures:


//console.log(a);
//console.log(b);
//console.log(c); // it will print the value of the var data ype c as "the var datatypes are accessed outside the scope also which is a drawback of var."

//VI. Nested Scopes: inside a nested scope the child scope can access the elements of parent scope directly but the parent scope can't directly access the elements of the child scope;
//VII.In javascript variable can hold anythig like functions

//function one(){
//    const username="rashik"
//    function two(){
//        const website="Fleet"
//        console.log(username);
//
//    }
////    console.log(website);
//    two();
//}
//one();

//if (true){
//    const username="priyanshu";
//    if (username==="priyanshu"){
//        const website=" youtube"
//        console.log(username+website);
//    }
//    console.log(website);
//}
//console.log(username);

//++++++++++++++++++++++++++++++++++++++++++++Intresting+++++++++++++++++++++++++++++++++++++++++++++++++++++
function addOne(num){
    return num+1
}
console.log(addOne(5))

const addTwo = function (num){
    return num+2
}
console.log(addTwo(6))