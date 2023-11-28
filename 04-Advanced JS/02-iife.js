(function () {
  var x = 2; // this var is now protected
})();

(function (a) {
  var x = a;
})(5);

(function (value) {
  var greet = "Hello";
  console.log(greet + " " + value);
})("IIFEs");
