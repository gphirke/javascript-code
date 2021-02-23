/*
Implement a get function to find value
get(obj, path, defaultValue);

Example
get(obj, 'a.b', 100) -> 3
get(obj, 'a.c', 100) -> 100
get(obj, 'a', 100) -> {b:3}

*/

function get(obj, path, defaultValue){
   var keys = path.split(".");
   let temp = obj;
   for(let i=0; i<keys.length; i++){
       if (typeof temp[keys[i]] === "undefined") {
        return defaultValue;
       };
      temp = temp[keys[i]]
   }
  return temp;
  
}

let obj = {
  a:{
    b: false
  }
}


console.log(get(obj, 'a.b', 100));

console.log(get(obj, 'a', 100));

console.log(get(obj, 'a.c', 100));

console.log(get(obj, 'a.b.c', 100));
