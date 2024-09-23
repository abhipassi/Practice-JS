// let pLanguages = ["js", "cpp", "java", "r", "go", "c"]
// pLanguages.forEach(function (lang, index, Arr) {
//     console.log(index +1 ,lang , Arr)
    
// })

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let newarr = arr.forEach( (num) =>{
//     console.log(num + 10);
     
// })

// let sq = [2,3,4,5,6,7,8,9,10]
// sq.forEach((square) => {console.log(square*square);
// })
// console.log(newarr);

// the for each is a method that do not return any value it is simply used for printing purpuses

// filter method 
// this method is also a call back function that cna return values 

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumbers = numbers.filter((num) => num < 4)
// console.log(newNumbers)

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumbers = numbers.filter((num) => {
//     return num < 4})
// console.log(newNumbers)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

//   let newBooks = books.filter( (bk) => bk.genre === 'Fiction')
let newBooks = books.filter( (bk) => {
    return bk.publish > 1995 && bk.genre === 'History'
})
  
//   console.log(newBooks);


// map method 
// let num = [1,2,3,4,5,6,7,8,9,10]
// let newNum = num.map( (n) =>{
    // return n + 10
    // return n < 5
// })
// console.log(newNum);

// chaining for methods like filter map

let num = [1,2,3,4,5,6,7,8,9,10]
let newNums = num.map((n)=>{return n*10}).map( (n)=> {return n *2}).filter((n) =>{return n > 5})
// console.log(newNums);


// let sq = [2,3,4,5,6,7,8,9,10]
// let newsq = sq.map((n)=>{return n*n})
// console.log(newsq);


// // Reduce
// let value = [2,3,4,5,6,7,8,9,10]
// let modifiedValue = value.reduce((acc,currVal)=>{
//     console.log(`acc : ${acc} and currval : ${currVal}`);
    
//     return acc+ currVal
// },10)
// console.log(modifiedValue);


let shoppingCart = [{
    course : "Js",
    price : 10000
},
{
    course : "py",
    price : 10
},
{
    course : "c",
    price : 1999
},
{
    course : "c++",
    price : 999
},
{
    course : "R",
    price : 100
}]
  
let total = shoppingCart.reduce((acc, item) =>{
   return acc+item.price
},0)
console.log(total);
