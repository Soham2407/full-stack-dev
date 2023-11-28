const id = Symbol("id");
const age = Symbol("age");

const obj = {
  firstName: "obj",
  [id]: 1,
  [age]: 20,
};

console.log(obj);
console.log(obj[id]);
console.log(obj[age]);

const symId = Symbol.for("id");
const symAge = Symbol.for("age");
console.log(typeof symId, symId);
console.log(typeof symAge, symAge);
