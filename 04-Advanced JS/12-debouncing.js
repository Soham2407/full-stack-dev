let count = 0;
const getData = () => {
  console.log("fetching data", count++);
};

function debounce(cb, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}

const betterFunction = debounce(getData, 1000);
