// Can you write code for this function: sum(a)(b)(c)....( n)() should return sum of all element;


function sum(a) {
    return function(b){
        if (b){
          return sum(a + b); 
        }
        return a;
    } 
}


console.log(sum(1)(2)(3)());



// with arrow function

var sum = a => b => b ? sum(a+b) : a;
