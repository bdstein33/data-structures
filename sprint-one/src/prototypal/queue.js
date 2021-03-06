var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize;
};

queueMethods.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    var removed = this.storage[0];

    for (var i=0; i<this.queueSize-1; i++) {
      this.storage[i] = this.storage[i+1];
    }

    delete this.storage[this.queueSize-1];
    this.queueSize--;

    return removed;
  }
};
