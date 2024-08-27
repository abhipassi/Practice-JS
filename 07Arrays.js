let myArr = [0,1,2,3,4,5,6]
// array methods
// myArr.push(7 ,8)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// slice and splice
let slarr = myArr.slice(1,3)
// console.log("A =",myArr)
// console.log(slarr);

let sparr = myArr.splice(1,3)
// console.log("B =",myArr)
// console.log(sparr);

let marvel_heros = ["hulk","spiderman","antman","ironman"]
let dc_heros = ["flash","batman","superman"]
// marvel_heros.push(dc_heros)


// let newHeros =marvel_heros.concat(dc_heros)
// console.log(newHeros);
// console.log(marvel_heros + dc_heros); retun as string 

// spread
let all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

let arr = [1,2,3,4,[5,6,7,[8,9,10]],11,32]
// console.log(arr.flat(Infinity)) (solve the complexcity of te Array)

// console.log(Array.isArray(arr)); to check the arr or not 
let myName = "Abhijiit_Passi"
let a = Array.from(myName)
// console.log(Array.isArray(a));
// console.log(a);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));









