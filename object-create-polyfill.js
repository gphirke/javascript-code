function objectCreate(obj){
  if(typeof Object.create != "function"){
    Object.create = function(obj){
        function F(){};
        F.prototype = obj;
        return new F();
    }; 
  }
}

objectCreate();
