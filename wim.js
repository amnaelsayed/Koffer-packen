//

// var promise = new Promise(function(resolve, reject) {
//   // do thing, then…

//   if (/* everything worked */) {
//     resolve("See, it worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });

Promise.resolve(answer)
  .then(function (newQuestion) {
    // <-- This will happen after the above Promise resolves (returning the value 'some')
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        string += "thing";
        resolve(string);
      }, 1);
    });
  })
  .then(function (string) {
    // <-- This will happen after the above .then's new Promise resolves
    console.log(string); // <-- Logs 'something' to the console
  });

const versuche = prompt(`what will happen is...`);
