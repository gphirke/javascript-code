function readonly(target, key, descriptor){
  descriptor.writable = false;
  return descriptor;
}

class Person {
  @readonly
  fullName(){
    return `${this.firstName} ${this.lastName} name of Person.`;
  }
}

/// defining method with class will be same as follow: 

/* Object.defineProperty(Person.prototype, "fullName", {
    value: function(){
      return `${this.firstName} ${this.lastName} name of Person.`;
    },
    writable: true,
    configurable: true,
    enumerable: true
}) */

//A decorator is just an expression that will be evaluated and has to return a 
//function. This is why `@readonly` and `@something(parameter)` can both work.


//the decorator has same signature "Object.defineProperty" and 
//has an opportunity to intercede bfore relevant defineProperty actually occures

var person = new Person();

console.log(person); // can see the fullName method on prototype

//this will throw an error "Cannot assign to read only property 'fullName' of object '#<Person>'"
person.fullName = function(){
  console.log("will not able to override by this fullName function");
}

