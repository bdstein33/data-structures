var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.stackSize;
};

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    var removed = this.storage[this.stackSize-1];
    delete this.storage[this.stackSize-1];
    this.stackSize--;
    return removed;
  }
};


