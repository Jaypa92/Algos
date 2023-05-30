// Created and tested the functions for the MyHashSet class

var MyHashSet = function(){
    // Creates a new instance of the MyHashSet class
    this.set = new Set();
};

MyHashSet.prototype.add= function(key){
    // Allows the instance of the class to add a value within the set
    this.set.add(key);
};

MyHashSet.prototype.remove= function(key){
    // Allows the instance of the class to remove a value from within the set
    this.set.delete(key);
};

MyHashSet.prototype.contains = function(key){
    // Allows the instance to test to see if the set contains a specified value
    if(this.set.has(key)){
        return true;
    }
    else{
        return false;
    }
};

// Tests
Set = new MyHashSet();
Set.add(10);
Set.add(50);
console.log(Set.contains(10));
console.log(Set.contains(50));
Set.remove(50);
console.log(Set.contains(50));