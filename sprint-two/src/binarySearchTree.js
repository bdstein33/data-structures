var BinarySearchTree = function(value){
  this['value'] = value;
  this.left = {};
  this.right =  {};
};

BinarySearchTree.prototype.left = function(){
  return this.left;
};

BinarySearchTree.prototype.right = function(){
  return this.right;
};

BinarySearchTree.prototype.insert = function(value){

  var insertValue = function(node) {
    if (value > node.value) {
      if (Object.keys(node.right).length === 0) {
        node.right = {value: value, left: {}, right: {}};
      }
      else {
        insertValue(node.right);
      }
    }
    else if (value < node.value) {
      if (Object.keys(node.left).length === 0) {
        node.left = {value: value, left: {}, right: {}};
      }
      else {
        insertValue(node.left);
      }
    }
  };
  insertValue(this);
};

BinarySearchTree.prototype.contains = function(value){

  var checkNode = function(node){
    if (value === node.value) {
      return true;
    }

    else if (value > node.value) {
      if (node.right.value !== undefined) {
        return checkNode(node.right);
      }
      else {
        return false;
      }
    }

    else if (value < node.value) {
      if (node.left.value !== undefined) {
        return checkNode(node.left);
      }
      else {
        return false;
      }
    }
  };
  return checkNode(this);
};

BinarySearchTree.prototype.depthFirstLog = function(cb){

	var cbEachNode = function(node) {
    cb(node.value);
		if (node.left.value !== undefined) {
			cbEachNode(node.left);
		}
		if (node.right.value !== undefined) {
			cbEachNode(node.right);
		}
	};

	cbEachNode(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */







