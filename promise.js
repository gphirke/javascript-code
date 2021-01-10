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
  // chain the 'then' method, which bind/accepts a callback to 
  // be called when the promise is rsolved
 .then(function() {
   alert('It\'s been three seconds!');
 })
 

/*Multiple callback*/
// you can register multiple callback with promise

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world');
    }, 2000);
});

promise.then(function(data) {
    console.log(data + ' 1');
});

promise.then(function(data) {
    console.log(data + ' 2');
});

promise.then(function(data) {
    console.log(data + ' 3');
});



//The reject function is used to trigger an error. When you use then, you can give 2 functions. 
//The first function is used when the promise exits successfully. The second function is used when the promise encounters an error.

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('We are all going to die');
    }, 2000);
});

promise.then(function success(data) {
    console.log(data);
}, function error(data) {
    console.error(data);
});


//when error happens with multiple callback

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('We are all going to die');
    }, 2000);
});

promise.then(function success(data) {
    console.log(data + ' 1');
}, function error(data) {
    console.error(data + ' error 1');
});

promise.then(function success(data) {
    console.log(data + ' 2');
}, function error(data) {
    console.error(data + ' error 2');
});

promise.then(function success(data) {
    console.log(data + ' 3');
}, function error(data) {
    console.error(data + ' error 3');
});



// You can call resolve and reject multiple times, but this is useless. 
// Once a promise is finished, it can't restart.

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world 1');
        resolve('hello world 2');
        resolve('hello world 3');
        resolve('hello world 4');
    }, 1000);
});

promise.then(function success(data) {
    console.log(data);
});


////
//the result of then is promise
//
var promise = job1();

promise

.then(function(data1) {
    console.log('data1', data1);
    return job2();
})

//When you are in a then callback, if you return anything but a promise, an auto-resolved promise is created, and this promise will be the result of the then call.
.then(function(data2) {
    console.log('data2', data2);
    return 'Hello world';
})

// an auto-resolved promise with no data (if you try to get any data, you'll get undefined).
.then(function(data3) {
    console.log('data3', data3);
});

function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}


//1. the broken chain 

function test() {
    var promise = job();

    promise.then(function(data) {
        doSomething(data);
    });

    return promise;
}

// The problem with above snippet is that we return the initial promise. Not the result of promise.then. The result of promise.then is a lost promise because no one can interact with it


//correct version of above snippet

function test() {
    return job().then(function(data) {
        doSomething(data);
    });
}

//2. the ghost promise

function job() {
    if (test) {
        return aNewPromise();
    } else {
        return 42;
    }
}

var result = job();
//we need to add check here
if (typeof job === 'object' && typeof job.then === 'function') {
    // ...
} else {
    // ...
}


//correct version of above snippet 

function job() {
    if (test) {
        return aNewPromise();
    } else {
        return Promise.resolve(42); // return an anto-resolved promise with `42` in data.
    }
}

//3. Forgotten promise 


//You call a method that returns a promise but you create your own promise:
function test() {
    var promise = job();

    return new Promise(function(resolve, reject) {
        promise.then(function(data) {
            data = doSomething(data);
            resolve(data);
        }, function(error) {
            reject(error);
        });
    });
}

//correct version of above snippet is,
function test() {
    return job().then(function(data) {
        return doSomething(data);
    });
}


/*Promise.all*/

// if you want to start multiple asynchronous jobs at once and you want results even if a job is rejected?

let p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([p1.catch(function() {}), p2.catch(function() {}), p3.catch(function() {}), p4.catch(function() {}), p5.catch(function() {})]);

promise

.then(function(data) {
    data.forEach(function(data) {
        console.log(data);
    });
})

.catch(function(error) {
    console.error('error', error);
});







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
