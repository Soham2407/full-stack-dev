// 1 example
function heavy(x) {
  console.log(`${x} - heavy`);
  return `${x} - heavy`;
}

function memorize(fx) {
  let map = new Map();

  // wrapper
  return function (x) {
    if (map.has(x)) {
      return map.get(x);
    } else {
      let memoValue = fx(x);
      map.set(x, memoValue);
      return memoValue;
    }
  };
}

const memoHeavy = memorize(heavy);
memoHeavy(1);
memoHeavy(2);
memoHeavy(1);
memoHeavy(3);

// 2 example
const calculation = function (n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

function memoize(cb) {
  const cache = {};

  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      const result = cb(n);
      cache[n] = result;
      console.log(cache);
      return result;
    }
  };
}

const result = memoize(calculation);
console.log(result(5));
console.log(result(3));
console.log(result(5));
