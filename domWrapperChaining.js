// implement a simple DOM wrapper to support method chaining like jQuery
// reference https://bigfrontend.dev/problem/implement-a-simple-DOM-wrapper-to-support-method-chaining-like-jQuery

// could you create a simple wrapper $ to make above code work as expected?


$('#button')
  .css('color', '#fff')
  .css('backgroundColor', '#000')
  .css('fontWeight', 'bold')
  
  
function $(el) {
  // your code here
}


// solution
function Wrapper(el) {
    this.el = el;
}

Wrapper.prototype.css = function(prop, val) {
  this.el.style[prop] = val;
  return this;
}
 
function $(el) {
  return new Wrapper(el);
}


// solution 2:


function $(el) {
  const css = function(prop, val){
    el.style[prop] = val;
    return {
      css
    }
  }
  return {
    css
  }
}

