// this function, waitThreeSeconds, returns a promise
function waitThreeSeconds() {
  // below is the constructor for the promise. It takes a 
  // callback that accepts two arguments,
  // resolve and reject (functions)
  // you call these functions when the code succeeds or fails
  return new Promise(function(resolve, reject) {
   setTimeout(function() {
      // resolve the promise after 3 seconds
      // the function you pass to 'then' will be called
      resolve();
    }, 3000);
  })
}
// call the asynchronous function, which returns our promise
waitThreeSeconds()
  // chain the 'then' method, which accepts a callback to 
  // be called when the promise is rsolved
 .then(function() {
   alert('It\'s been three seconds!');
 })
 // we don't need a catch method in this example, because the
 // promise has no potential to fail (be rejected)



//*********** example 2 ****************//
const prom = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('Promise is created and consumed');
  }, 200);
});

prom.then(value => {
  console.log(value);
});

//promise rejected
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise is rejected');
  }, 200);
});

//use catch to see the error 
prom.catch(error => {
  console.log(error);
});
