// this keyword 
// it refer to the context of the code like a code written in function
const user = {
    userName: "Abhijit",
    age: 21,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to vs`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()

// user.userName = "Abhijit Passi"

// user.welcomeMessage();

// console.log(this);

// in the node environment this keyword gives {} empty object because there is no global context 
// on other side in console window this keyword returns window beacaue it is a global object 

// arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(10, 6));

const multwo = (num1, num2) => num1 * num2 // this is a another way to write arrow function and this way is called implicient function in addition if we are writting our function using this way we dont have use return keyword and {} :)
// console.log(multwo(4,6));


// one more way
// const multwo = (num1, num2) => (num1 * num2)






