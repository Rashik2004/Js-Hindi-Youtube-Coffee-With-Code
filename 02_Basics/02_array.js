const marvel_heros=["spiderman","Ironman","Thor","Captain America","Hulk"]
const dc_heros=["superman","Flash","Batman","Groot"]
//marvel_heros.push(dc_heros);
//console.log(marvel_heros)
const allHeros=marvel_heros.concat(dc_heros);
//console.log(allHeros);
const all_new_heros=[...dc_heros,...marvel_heros]
//console.log(all_new_heros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray=anotherArray.flat(2);
//console.log(realAnotherArray);

//console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));//intresting case in array in point of interview

let score1=300

let score2=430

let score3=250

console.log(Array.of(score1,score2, score3));