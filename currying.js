function sum(a, b, c){
	return a + b + c;
}

function Curry(func){
	return function curries(...args){
		if(args.length >= func.length){
			return func.apply(this, args);
		}else{
			return function(args2){
				return curries.apply(this, args.concat(args2));
			}
		}
	}
}



console.log(sum(1, 2, 3));

var currFun = Curry(sum);

console.log(currFun(1)()(2,3))


// scond type of problem


//write a function which should return the sum when compares to number; 

// console.log(add(1)(2)(3)==6);//true
//console.log(add(1)(2)(3)(4)==10);//true

function add(n){
  var addNext = function(x) {
    return add(n + x);
  };

  addNext.valueOf = function() {
    return n;
  }
  ;

  return addNext;
}


//second solution 

function add1(x){
  let sum = x;
  return function resultFn(y){
   sum +=y;
   resultFn.result = sum;
   return resultFn;
  }
}

add1(1)(2)(3).result;






