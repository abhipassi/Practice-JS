// // Functions in Javascript

// // function myFunction(){
// //     console.log("Hello");
// //     console.log("My name is Abhijit");
// // }
// // myFunction();

// // function for sum of two numbers
// // function sum(x,y){
// //     console.log(x+y);
// // }
// // sum(3,4);

// // Sum Function
// function Sum(a,b){
//     return a+b;
// }
// // Multiplication
// function mul(a,b){
//     return
// }

// sum function
// function sum(a,b){
//     return a+b;
// }
// let x = sum(10,3434);
// console.log(x);

// function sum1(a,b){
//     console.log(a+b);

// }
// sum1(3,4);
// Arrow functions

// let sum = (a,b) => {
//     console.log(a+b);
// }
// sum(200,200);

// let mul =(a,b)=>{
//     return a*b;
// }
// mul(2,4);

// practice questions

// Qs. Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.
// function countVowels(str) {
//   let count = 0;
//   for (char of str) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       count++;
//     }
//   }
//    return count;
// }
// using arrow function
// let countVow = (str) => {
//     let count = 0;
//     for (char of str){
//         if(
//             char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
//         ){
//             count++
//         }
//     }
//     return count;
// }
// For a given array of numbers, print the square of each value using the forEach loop.
// let arr = [1,2,3,4,5,6,7,8,9];
//  arr.forEach((num) =>{
//     console.log(num * num);
//  })

//  another way
// let sq = [23,2,4,23];
// let square = (num) => {
//     console.log(num*num);
// }
// sq.forEach(square);

// filter method 

// let arr = [2,43,52,14315,23313,53];
// let newarr = (even) =>{
//     console.log(even % 2 ===0) ;`   `
// }
// let evenArr = arr.filter(newarr);


// fibonacci series

let fibonacci = (n) =>{
    let fib = [0,1]
    for(let i = 2 ; i < n ; i ++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
    
} 
// console.log(fibonacci(15));


let fib = (n) =>{
    let a = 0
    let b = 1
    const arr =[0]
    for(let i = 0; i <=n; i++){
        let c = a+b
        a = b 
        b = c
        arr.push(a)
    }
    return arr

}
// console.log(fib(10));


// count vowels 

let countVw = (str) =>{
    let count = 0
    for(let char in str){
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            count++
        }
            
        
    }
    
    console.log(count);
}
// console.log(count);
// countVow('abhijit')
let countVow = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }
    return count;
}

// console.log(countVow('abhijit')); // Output: 3

let f = (n)=>{
    let a = 0
    let b = 1
    let arr = [0]
    for(let i = 0; i <=n; i++){
        let c = a+b
        a = b
        b = c
        arr.push(a)
    }
    return arr
}
// console.log(f(10));



