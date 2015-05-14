var Queue = function() {
  this.queueSize = 0;
  this.storage = {};


};

Queue.prototype.size = function() {
  return this.queueSize;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) {
    var removed = this.storage[0];
    for (var i=0; i < this.queueSize - 1; i++) {
      this.storage[i] = this.storage[i+1];
    }
    delete this.storage[this.queueSize - 1];
    this.queueSize--;
    return removed;
  }
};

