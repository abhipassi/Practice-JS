//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);



// nested function 
// in the nested function the child can access the variables of the parent but the parent cannot access the child variables 
function one(){
    let userName = "Abhijit"

    function two(){
        let website = "Youtube"
        console.log(userName);
    }
    // console.log(website);
    
    // two()
}
// one()

// nested control statements
// work same as nested functions
if (true) {
    let userName = "Abhijit"
    if (userName === "Abhijit") {
        const website = " youtube"
        console.log(userName + website);
    }
    // console.log(website); it will give error because we are calling website outside of it scope 
    
}
// console.log(userName); it will also give error because it is called outside of its scope


// ++++++++++++++++++++++++++ ways of declaring a function ++++++++++++++++++
// writting a function
// in this type of function declaration we can access the function before its declaration 
// like we can access addOne before its declaration 
// addOne(34)
function addOne(num){
    return num + 1
}
addOne(5)

// this is called a expression / another way of writing function
// in this type of function declaration we cannot access the function before its declaration 
// addTwo(5) it will give Error
let addTwo = function(num){
    return num + 4
}
addTwo(6)



