function Parent(firstname){
    this.firstname = firstname;
}


function Child(firstname){
    Parent.call(this, firstname); // line 1
}

Child.prototype = Object.create(Parent.prototype); //line 2
Child.prototype.constructor = Child; // line 3


