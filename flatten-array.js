const arr = [12,[34,5,6, [7,98,234, 23]]];
// o/p should be [12, 34, 5, 6, 7, 98, 234, 23];

//solution 1:
function flatten(arr){
    let newArray = [];
    for(let i=0; i< arr.length; i++){
        if(Array.isArray(arr[i])){
          newArray =  newArray.concat(flatten(arr[i]))
        }else{
          newArray.push(arr[i])
        }
    }
  return newArray; 
}

flatten(arr);

//solution 2: recursive way
function getArray (arr) {
	var flattenArray = [];
	var getFlatArr = function(arr){
  		for (let ele of arr) {
      	if (Array.isArray(ele)){
        	return getFlatArr(ele);
        }else {
        	flattenArray.push(ele);
        }
      }
  } 
  getFlatArr(arr);
  return flattenArray;
}

getArray(arr);
