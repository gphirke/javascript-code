
//debouncing limits the rate at which a function gets invoked.

const debounce = function(func, delay){
  var delayBounce;
  return function(){
    var context = this;
    var args = arguments;
    clearTimeout(delayBounce);  //Passing an invalid ID to clearTimeout() silently does nothing; no exception is thrown.
    delayBounce = setTimeout(func.apply(context, ...args), delay);
  } 
}
