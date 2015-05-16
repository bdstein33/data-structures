var BinarySearchTree = function(value){
  this.storage = {};
  this.storage[value] = {left: {}, right: {}};
  this.base = value;
};

BinarySearchTree.prototype.left = function(){

};

BinarySearchTree.prototype.right = function(){

};

BinarySearchTree.prototype.insert = function(value){
  // for (var node in this.storage) {
  //   // if value > node, then add to node[right]
  //   // otherwise, add to node[left]
  // }
  var insertValue = function(node) {
    var nodeValue;
    for (var key in node) {
      nodeValue = key;
    }

    if (value > nodeValue) {
      if (node[nodeValue].right === {}) {
        node[nodeValue].right = {value: {left: {}, right: {}}};
      } else {
        insertValue(node[nodeValue].right);
      }
    // } else if (value < node) {
    //   if (node[nodeValue][left] === {}) {
    //     node[nodeValue][left] = {value: {left: {}, right: {}}};
    //   } else {
    //     insertValue(node[left]);
    //   }
    }
  }
  insertValue(this.storage);
};

BinarySearchTree.prototype.contains = function(){

};

BinarySearchTree.prototype.depthFirstLog = function(){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

var test = new BinarySearchTree(8);
console.log(test);
test.insert(10);
console.log(test);

