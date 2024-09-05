// Immediately Invoked Function Expression
function iife(){
    console.log(`Data Base Connected`);   
}
iife()

let a = 10

(function pr(){
    console.log(a);
    
}) //the paranthesis we have used to remove the trafic of global scope varibales
// we can see here we have declared one variable a and we are trying to log that variable in the pr function by use of iife function the pr function is unable to fetch the global variable     
// pr(); to end iife we use semicolon if we dont use semicolon the iife wont stop and the code written after the iife function will not execute

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Abhijit')