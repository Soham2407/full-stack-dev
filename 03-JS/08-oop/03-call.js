function SetUsername(username) {
  this.username = username;
}

function CreateUser(username, email, password) {
  // call SetUsername as per current context
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const user1 = new CreateUser("User1", "user1@abc.com", "pqr123");
console.log(user1);
