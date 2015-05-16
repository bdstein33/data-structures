var Tree = function(value){
  var tree = {};
  tree.value = value;
  tree.children = [];
  _.extend(tree, treeMethods);
  return tree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  var containsTarget = false;

  var checkTree = function(tree) {
    console.log(tree.value);
    if (tree.value === target) {
      containsTarget = true;
    } else {
      for (var i=0; i < tree.children.length; i++) {
        checkTree(tree.children[i]);
      }
    }
  };

  checkTree(this);
  return containsTarget;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */



