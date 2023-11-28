const person = {
  firstName: "virat",
  age: 35,
  sayHi: function () {
    console.log(`hello i am ${this.firstName}`);
  },
};

person.sayHi();

function getBirthYear() {
  return new Date().getFullYear() - this.age;
}

person.birthYear = getBirthYear;

console.log(person);

console.log(person.birthYear()); // 1988
