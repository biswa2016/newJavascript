const PromiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

PromiseOne.then(function () {
  console.log("Promised Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Kunu", email: "kunu@google.com" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log("data", data);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Kunu", email: "kunu@google.com" });
    } else {
      reject({ status: error, msg: "something went wrong" });
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log("user", user);
    return user.username;
  })
  .then((name) => {
    console.log("name", name);
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
  .finally(() => {
    console.log("the end");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Goat", email: "goat@google.com" });
    } else {
      reject({ status: error, msg: "Js went wrong" });
    }
  }, 1000);
});

async function consumePromiseFive(params) {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromiseFive();



