var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.`
  var someInstance = {};
  someInstance.storage = {};
  someInstance.queueSize = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

// declare QueueMethods here

queueMethods.enqueue = function(value){
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function(){
  if (this.queueSize > 0){
    var removed = this.storage[0];
    for (var i=0; i<this.queueSize-1; i++){
      this.storage[i] = this.storage[i+1];
    }

    delete this.storage[this.queueSize-1];
    this.queueSize--;

    return removed;
  }

};

queueMethods.size = function(){
  return this.queueSize;
};
