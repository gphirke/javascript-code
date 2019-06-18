//implement myBind function
Function.prototype.myBind = function(_this, args){
    var thatfUNC = this;
    return function(){
      if (typeof thatfUNC !== 'function') {
      //if thatfUNC is not callable
      throw new TypeError('Function.prototype.bind - ' +
             'what is trying to be bound is not callable');
      }
      return thatfUNC.apply(_this, ...args)
    }
};


var obj = {
  a: 1, b: 2
};

function sum(){
  return this.a + this.b;
};

var calSum = sum.bind(obj);

var mycalSum = sum.myBind(obj);
console.log(calSum());
console.log(mycalSum());
