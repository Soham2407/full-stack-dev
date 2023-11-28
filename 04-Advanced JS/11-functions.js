// function statements / function declarations
function sayHi() {
  console.log("hello");
}

sayHi();

// function expressions
const greet = function () {
  console.log("hello JS");
};

greet();

// anonymous function
// function(){

// }

// named function expression
const createUser = function fx(username) {
  if (username) {
    return `welcome ${username}`;
  } else {
    return fx("anonymous");
  }
};

console.log(createUser("virat"));
console.log(createUser());
