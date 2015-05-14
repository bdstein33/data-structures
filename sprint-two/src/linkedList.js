var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // create a new node
    var node = new Node(value);
    // if head is null, then assign node to head
    // if tail is not null, then assign new node to list.tail
    this.head === null ? this.head = node : this.tail.next = node;
    // assign new node to tail
    this.tail = node;
  };

  list.removeHead = function(){
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target){
    var testNode = this.head;
    while (testNode !== null ) {
      if (testNode.value === target) {
        return true;
      } else {
        testNode = testNode.next;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var list = {
//   value: 12,
//   rest: {
//     value: 06,
//     rest: {
//       value: 71,
//       rest: {
//         value: 26,
//         rest: null
//       }
//     }
//   }

//   list.head ===
//   list
// };
