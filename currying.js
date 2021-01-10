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
