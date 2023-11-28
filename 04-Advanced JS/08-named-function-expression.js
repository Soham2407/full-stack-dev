const greet = function fx(name) {
  if (name) {
    return `Hello ${name}`;
  } else {
    return fx("anonyomus"); // function call itself
  }
};

console.log(greet("virat"));
console.log(greet());
