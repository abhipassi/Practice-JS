function myName() {
  console.log("Abhijit");
}
// myName()

function addNum(a, b) {
  c = a + b;
  console.log(c);
}
// addNum(23,"34")
function user(userName) {
  if (userName === undefined ) {
    console.log(`Please enter a valid username`);
    return;
  }
  console.log(`${userName} just logged in`);
}
// user("Abhijit");


function calculateCartPrice(...num1){ //rest operator in this we can give infinte number of value
  return num1
}
// console.log(calculateCartPrice(200, 2224,424,2323,323,2424));


//  passing objects in function
let userDetail = {
  name: "Abhijit",
  age: 21,
  height: 5.11
}
function user(Newobj){
  return `Name of the user is ${Newobj.name} and age of the user is ${Newobj.age} and height of the user is ${Newobj.height}`
}
// console.log(user(userDetail));

// passing array in function 
let price = [200,3000,323,323,45,423,53323435,23353]

function arrayP(arr){
  return `the price of third item is ${arr[2]}`
}
// console.log(arrayP(price));
