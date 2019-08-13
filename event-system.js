//implement event system 

var eventObj = {};
var $ = {
    on: function(event, cb){
        if(!eventObj.hasOwnProperty(event)){
            eventObj[event] = cb;            
        }
    },

    fire: function(event){
        eventObj[e]
    }
};
 
 $.on('click', function(){
 console.log('Hello Dude you clicked me');
 });
 
 $.on('move', function(){
 console.log('Hello Dude you moved over me');
 });
 
 $.fire('click');
 //should print 'Hello Dude you clicked me'
 
 $.fire('move');
 //should print 'Hello Dude you moved over me'
