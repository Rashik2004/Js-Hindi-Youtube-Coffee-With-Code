//we can change the size of array in javascript
const myArr=[1,2,3,4,5,6]
const myHeros=["Nagraja","shaktiman","preman"]
const myArr2= new Array(1,2,3,4)
//console.log(myArr[0])

//array methords
//myArr.push(7)
//myArr.push(8)
//myArr.push(9)
//console.log(myArr);
//myArr.unshift(9)
//console.log(myArr);
//console.log(myArr.indexOf(9));
//console.log(myArr.indexOf(3));


const newArr=myArr.join()
//console.log(myArr);
//console.log(typeof newArr);
//console.log(newArr);

console.log("A: ", myArr)
const  myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B: ", myArr)

const  myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C: ", myArr)

//slice helps to cut and print a particular portion and display it without affecting the original array
//but on the other side 