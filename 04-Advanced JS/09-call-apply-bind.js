const person = {
  name: "John",
  age: 30,
};

console.log(person);

function sayHi(a, b) {
  console.log(this.name + a + b);
}

// call
sayHi.call(person, 1, 2);

// apply
sayHi.apply(person, [8, 9]);

// bind
const helloFunc = sayHi.bind(person);
helloFunc(4, 5);
