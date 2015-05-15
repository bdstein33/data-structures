var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
 var toCheck = [this];
 while (toCheck.length > 0) {
  var currentTree = toCheck.shift();
  if (currentTree.value === target) {
    return true;
  }
  for (var i=0; i < currentTree.children.length; i++) {
    toCheck.push(currentTree.children[i]);
  }
 }
 return false;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
