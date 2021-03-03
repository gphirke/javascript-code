MyNamespace = {
    ObjectUtils: {
        equals: function(obj1, obj2){
            //object must have same type
            if(typeof(obj1) !== typeof(obj2)){
                return false;
            }
            
            //take care of null and undefined primitives
            if((!obj1 || !obj2) && (obj1 && obj2)){
                return false;
            }

            //handle all remaining premitive type
            if(['string', 'number', 'boolean', 'symbol'].indexOf(typeof(obj1)) > -1){
                return obj1 === obj2;
            }

            if(obj1.constructor.name === 'Array'){
                if(obj2.constructor.name === 'Array' && obj1.length !== obj2.length){
                    return false;
                }
                for(var i=0;i<obj1.length;i++){
                    if(!MyNamespace.ObjectUtils.equals(obj1[i], obj2[i])){
                        return false;
                    }
                }
                return true;
            }   

            if(typeof(obj1) === 'object' && 
                MyNamespace.ObjectUtils.equals(Object.keys(obj1), Object.keys(obj2))){
                           
                for(p in obj1){
                    if(!MyNamespace.ObjectUtils.equals(obj1[p], obj2[p])){
                        return false;
                    }
                }
                return true;
            }
                     
            return false;
        }
    }
}

console.log(MyNamespace.ObjectUtils.equals(1,1));
console.log(MyNamespace.ObjectUtils.equals([1,3], [1,5]));
console.log(MyNamespace.ObjectUtils.equals([1,3], [1,3]));
