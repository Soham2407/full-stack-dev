// create method that convert any string to uppercase and gives length

String.prototype.upperCaseAndLength = function () {
  return `${this.trim().toUpperCase()} and length is ${this.length}`;
};

const str = "umbrella   ";
console.log(str.upperCaseAndLength());

const result = "king Kohli".upperCaseAndLength();
console.log(result);
