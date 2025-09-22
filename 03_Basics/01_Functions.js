function myName(){
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("G");
}
//myName()

//function addTwoNum(num1,num2){ //here num1 and num2 are parameters
//    console.log(num1+num2)
//}
//
//addTwoNum(4,"a")//here 4 and a are called arguments

function addTwoNum(num1,num2){
//    let result=num1+num2
//    return result
      return num1+num2
}

const nums=addTwoNum(4,"a")
//console.log("Result",nums);

function loginUserMessage(username){
    if (username==undefined){
        console.log("Enter a valid user mail");
        return
    }
    return `${username} you just hopped into out server...`
}

console.log(loginUserMessage());