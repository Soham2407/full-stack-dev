function operation(type) {
  return function (num1) {
    return function (num2) {
      return type === "add" ? num1 + num2 : num1 - num2;
    };
  };
}

console.log(operation("sub")(5)(3));

const log = (time) => (serverity) => (msg) =>
  `at ${time.toLocaleString()} - Severity : ${serverity} - ${msg}`;

console.log(log(new Date())("Error")("Power outage"));

const logTime = log(new Date());
const logType = logTime("Warning");
console.log(logType("temp increases"));
