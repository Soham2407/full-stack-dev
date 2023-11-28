// object literal
const user = {
  username: "virat",
  isLoggedIn: true,
};

console.log(user);

// constructor function
function CreateUser(username, password) {
  this.username = username;
  this.password = password;
  this.greet = function () {
    console.log(`hi my name is ${this.username}`);
  };
}

const rohit = new CreateUser("Rohit", "123");
const akshay = new CreateUser("Akshay", "pqr");

CreateUser.prototype.showProfile = function () {
  console.log(`name: ${this.username}, pwd: ${this.password}`);
};

rohit.showProfile();
akshay.greet();
