const sayHi = (name) => {
  console.log(`hello ${name}`);
};

sayHi("virat");
console.log(sayHi.name);
console.log(sayHi.length);

sayHi.count = 1;
sayHi.count++;
console.log(sayHi.count);
