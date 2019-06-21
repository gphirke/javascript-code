//create queue class
var Queue = function(){
	this.first = null;
	this.size = 0;	
}

//create new node every time we add new data 
var Node = function(data){
	this.data = data;	
	this.next = null;
}

//append new data
Queue.prototype.enqueue = function(data){
	var node = new Node(data);
	if(!this.first){
		this.first = node;
	}else{
	var temp = this.first;	
	while(temp.next){
		temp = temp.next;
	}
	temp.next = node;
	}	
	this.size = this.size+1;		
	return this.first;
}

//remove data from queue
Queue.prototype.dequeue = function(){
    var temp = this.first;    
    this.first = this.first.next;    
    this.size = this.size - 1;
    return temp;
}

//pick the first element from queue
Queue.prototype.peek = function(){
	return this.first;
}

var queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
console.log(queue.peek());
(queue.dequeue());
(queue.dequeue());
console.log(queue.peek());
