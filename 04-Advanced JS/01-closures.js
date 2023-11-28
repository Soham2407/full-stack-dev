// Example 1
function onboard(name) {
  const msg = "welcome to our company";

  function greet() {
    return `hi, ${name} ${msg}`;
  }

  return greet;
}

const welcomeJohn = onboard("john");
console.log(welcomeJohn());

// Example 2
function initCounter() {
  let count = 0;

  return function () {
    console.log(count++);
  };
}

const count1 = initCounter();
count1();
count1();
count1();

const count2 = initCounter();
count2();
count2();
count2();
