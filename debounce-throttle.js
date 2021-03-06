
//debouncing limits the rate at which a function gets invoked.
//useful to improve the performance of large scale web applications.

const debounce = function(func, delay){
  var delayBounce;
  return function(){
    var context = this;
    var args = arguments;
    clearTimeout(delayBounce);  //Passing an invalid ID to clearTimeout() silently does nothing; no exception is thrown.
    delayBounce = setTimeout(() => { func.apply(context, args) }, delay);
  } 
}


<input type="text" onkeyup="betterFunction()" />



function getData() {
  console.log("fetching function....");
}


var betterFunction = debounce(getData, 300);



//throttle

var expensive = function(){
	console.log("expensive functionnns");
}

window.addEventListener("resize", throttle(expensive, 500))

function throttle(expensiveFun, limit){
	let flag = true;
	return function(){
		let context = this;
		let args = arguments;
		if(flag){
			expensiveFun.apply(context, args);
			flag = false;
			setTimeout(function(){
				flag = true;
			}, limit);
		}
	}
}
