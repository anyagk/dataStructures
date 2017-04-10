function Queue(){
  var queue  = [];
  var offset = 0;

  this.getLength = function(){
    return (queue.length - offset);
  }

  this.isEmpty = function(){
    return (queue.length == 0);
  }

  this.enqueue = function(item){
    queue.push(item);
  }

  this.dequeue = function() {
    if (queue.length == 0) return undefined;

    var item = queue[offset];

    if (++ offset * 2 >= queue.length){
      queue  = queue.slice(offset);
      offset = 0;
    }
    return item;
  }

  this.peek = function(){
    return (queue.length > 0 ? queue[offset] : undefined);
  }
}


class Tree {
  constructor() {
    this.children = new Array();
  }
  appendChild(el) {
    this.children.push(el);
  }
}


function treeHeight(n, el) {
  var newTree = createTree(n, el);
  var nodes = newTree.nodes;
  var root = newTree.rootNode;
  return height(nodes, root);
}

function height(nodes, root) {
  var q = new Queue();
  var height = 0;

  q.enqueue(root);

  while (true) {
    var numberOfNodes = q.getLength();

    if (q.isEmpty()) {
      return height;
    } else {
      height++;
    }

    while (numberOfNodes > 0) {
      var currentNodeIndex = q.dequeue();
      var currentNode = nodes[currentNodeIndex];
      for (var i = 0; i < currentNode.children.length; i++) {
        q.enqueue(currentNode.children[i]);
      }

      numberOfNodes--;
    }
  }
}

function createTree(n, el) {
  var rootNode;
  var nodes = new Array(n);

  for (var i = 0; i < n; i++) {
    nodes[i] = new Tree();
  }

  for (var i = 0; i < el.length; i++) {
    var parentIndex = el[i];
    if (parentIndex === -1) {
      rootNode = i;
    } else {
      nodes[parentIndex].appendChild(i);
    }
  }

  return {nodes, rootNode};
}

process.stdin.setEncoding('utf8');

var data = "";

process.stdin.on('end', function() {
  var lines = data.split("\n")
  var n = parseInt(lines[0]);

  var el = lines[1]
    .split(' ')
    .map(function(elem){
      return parseInt(elem);
    });

  console.log(treeHeight(n, el))
  process.exit()
});

process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
    data = data + new_data
  }
});
