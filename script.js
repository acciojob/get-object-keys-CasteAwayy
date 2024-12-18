const Student = function(name){
    this.name = name;
}

Student.prototype.getKeys = function(){
    return Object.keys(this);
}
