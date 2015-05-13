var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};
  someInstance.stackSize = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

// declare StackMethods here

stackMethods.size = function(){
  // console.log(this.size);
  return this.stackSize;
};

stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function(){
  if (this.stackSize > 0) {
    var last = this.storage[this.stackSize-1];
    delete this.storage[this.stackSize-1];
    this.stackSize--;
  }

  return last;
};
