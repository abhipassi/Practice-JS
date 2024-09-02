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
user("Abhijit");
