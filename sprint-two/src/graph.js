

var Graph = function(){
  this.nodeList = {};
};

Graph.prototype.addNode = function(node){
  this.nodeList[node] = [];
};

Graph.prototype.contains = function(node){
  return this.nodeList.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  if (this.contains(node)) {
    delete this.nodeList[node];

    for (var key in this.nodeList) {
      this.nodeList[key] = _.filter(this.nodeList[key], function(item){
        return item === node;
      });
    }

  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodeList[fromNode].indexOf(toNode) > -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //make sure nodes exist
  //make sure edge does not exist
  if (this.contains(fromNode) && this.contains(toNode)) {
    if (!this.hasEdge(fromNode, toNode)){
        this.nodeList[fromNode].push(toNode);
        this.nodeList[toNode].push(fromNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.contains(fromNode) && this.contains(toNode)) {
    if (this.hasEdge(fromNode, toNode)){
      for (var i=0; i<this.nodeList[fromNode].length; i++) {
        if (this.nodeList[fromNode][i] === toNode) {
          this.nodeList[fromNode].splice(i, 1);
        }
      }
      for (var i=0; i<this.nodeList[toNode].length; i++) {
        if (this.nodeList[toNode][i] === fromNode) {
          this.nodeList[toNode].splice(i, 1);
        }
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodeList) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




