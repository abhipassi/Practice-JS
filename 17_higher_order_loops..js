// for of loop
let arr = [1,2,3,4,5,6,7,8,9,10]

for (const val of arr){
    // console.log(val);
    
}

let greetings = "Hello World!"

for(const greet of greetings){
    if(greet == " "){
        continue
    }
    // console.log(greet);
    
}

let user = {
    userName: "Abhijit",
    age: 21,
    course: "B.Tech CSE",
    height: 5.11
}
// for (const key in user){
//     console.log(`${key} and the value is ${user[key]}`);
// }


// let str = "abhijit passi"
// let count = 0
// for(const char of str ){
//     if(char == 'a' || char == 'e' || char == 'i'  || char == 'o' || char == 'u'){
//         count++
//     }    
// }
// console.log(`the count of vowels is ${count}`);


// let str = prompt("Enter the string")
// let count = 0;

// for (const char of str.toLowerCase()) { 
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         count++;
//     }
// }

// console.log(`The number of vowels in the given string is: ${count}`);

let objUser = {
    "first_Name" : "Abhijit",
    "lastName" : "Passi",
    "age" : 21,
    "regNumber" : 72111865
}
//  for(const keys in objUser){
//     console.log(`${keys} = ${objUser[keys]}`);
//  }



// for each loop with function 
// let pLanguages = ["js", "cpp", "java", "r", "go", "c"]
// pLanguages.forEach(function (val){
    // console.log(val);
    
// })



// for each loop with arrow function 
// let pLanguages = ["js", "cpp", "java", "r", "go", "c"]
// pLanguages.forEach( (val)=>{
//     console.log(val);
    
// })


// let pLanguages = ["js", "cpp", "java", "r", "go", "c"]
// pLanguages.forEach( (val, index, arr)=>{
//     console.log(index, val, arr);
// })
// the for each loop can return upto three values 
// first one is the item or the value of array 
// the second one is the index of the values or the item
// the last but not the least it retun whole array itself 



// accessing the array object using forEach
let newLanguages = [
    {
        name : "javascript",
        extention : "js"
    },
    {
        name : "java",
        extention : "java"
    },
    {
        name : "python",
        extention : "py"
    }
]
newLanguages.forEach((item) =>{
    console.log(item.extention);  
})