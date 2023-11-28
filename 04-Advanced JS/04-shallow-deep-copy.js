// *******shallow copy**********
const person = {
  name: "john doe",
  age: 31,
};

// Object.assign()
const shallow1 = Object.assign({}, person);
shallow1.name = "steve smith";
console.log(person, shallow1);

// spread operator
const shallow2 = { ...person };
shallow2.age = 20;
console.log(person, shallow2);

// *******deep copy********
const obj1 = {
  a: 10,
  b: true,
  c: person,
};

// const deepCopy = { ...obj1 };
// deepCopy.a = 20;
// deepCopy.c.name = "Alex";

// Json stringify, parse
const deepCopy = JSON.parse(JSON.stringify(obj1));
deepCopy.b = false;
deepCopy.c.name = "json roy";
console.log(deepCopy, obj1);

// lodash library
