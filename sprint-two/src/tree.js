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
 while ()

};

tree.contains(5)



/*
 * Complexity: What is the time complexity of the above functions?
 */
