var obj = {
	a: {b: 4},
	b: 6,
	e: {r: {g: 6}}
}


///only for object 

function deepCopy(obj){
	var cloneObj = {};
	for(var key in obj){
		if(typeof obj[key] == "object"){	
			cloneObj[key] = deepCopy(obj[key]);	
		}else{
			cloneObj[key] = obj[key];
			}
		
	}
	return cloneObj;
}

console.log(deepCopy(obj));


//for different data types 


function deepClone(obj){
	if(Array.isArray(obj)){
		var arr = [];
		for (var i = 0; i < obj.length; i++) {
			arr[i] = deepClone(obj[i]);
		}
		return arr;
	}

	if(typeof(obj[key]) == "object"){
		var cloned = {};
		for(let key in obj){
			cloned[key] = deepClone(obj[key])
		}
		return cloned;	
	}
	return obj;
}

////Write a deepClone function such that it clone whatever data type is given to it deeply.
  
/*
console.log( deepClone(1) )

console.log( deepClone('abc') )

console.log( deepClone([1,2]) )

console.log( deepClone({a: 'abc', b: 'def'}) )

console.log( deepClone({
  a: 'a',
  num: 123,
  func: function(){'hello'},
  arr: [[1,2,3,[4,5]], 'def'],
  obj: {
    one: {
      two: {
        three: 3
      }
    }
  }
}) ) 

*/
////All of above should print similar deeply cloned data.
