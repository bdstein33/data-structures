var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined){
    var obj = {};
    obj[k] = v;
    this._storage.set(i, obj);
  } else {
    // declare another obj variable equal to the current obj at i
    var obj = this._storage.get(i);
    // add kv pair to this newly-created obj which is equal to the current index value
    obj[k] = v;
    // set storage with updated object
    this._storage.set(i, obj);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[k];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check to see if object at i, (if it doesn't do nothing)
  var obj = this._storage.get(i);
  if (obj !== undefined) {
    obj[k] = null;
    this._storage.set(i, obj);
  }
  // if it does, obj at that index, set value at that k to null
  //
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var hashTable = new HashTable();
// hashTable.insert('Steven', 'Seagal');
// console.log(hashTable);
