//Data types are classified into 2 types i) Primitive Datatypes and ii)"non-primitive datatypes"

//Primitive datatypes(these are generallg of seven types)
//=> in these datatypes if we do changes on the data it takes the reference and create a copy of that data and then do the changes, so that rest of the files dont goes affected;
//    i)String
//    ii)Number
//    iii)null
//    iV)boolen
//    V)Underfined
//    vi)symbol
//    vii)Big int

//const id=Symbol(12)
//const idValue=Symbol(12)
//console.log(id===idValue)

//Non-Primitive datatypes()
//    i) Array
//    ii)Objects
//    iii)Functions

const heroArray =["IronMan","BatMan", "SpiderMan", "Shaktiman"];
let myObj={
    name:"Rashik",
    age:21,
    course: "B.Tech",
    Year: "3rd",
}
//console.log(heroArray)
//console.table(myObj)

const myFunction = function (){
    console.log("hello World");
}
console.log(typeof myFunction)//the function are called object function

