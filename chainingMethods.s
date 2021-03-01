function StringBuilder() {
  this.str = "";
}

const chainableInstance = new StringBuilder();

StringBuilder.prototype.firstName = function(str){
    this.str = this.str +str;
    return this;
}

StringBuilder.prototype.lastName = function(str){
    this.str = this.str + str
    return this;
}

StringBuilder.prototype.build = function(){
    return this.str;
}

console.log(chainableInstance.firstName("gaenesh").lastName("phirke").build());

///another way 

StringBuilder = {
  str : "",
  firstName: function(str){
    this.str =  this.str+str;
    return this;
  },
  lastName: function(str){
    this.str =  this.str+str;
    return this;
  },
  build: function(){
    return this.str;
  }
}

console.log(StringBuilder.firstName("ganesh").lastName("phirke").build());

