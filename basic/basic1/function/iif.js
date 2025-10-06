// Immediately Invoked Function

(function one() {
    // named iif
  console.log(`DB Connected`);
})();

((name) => {
  console.log(`DB Connected two ${name}`);
})('kunu');
