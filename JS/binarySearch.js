// Write a function to check that a binary tree is a valid binary search tree
// Check if the node's value is greater than all values in the left subtree
// Check if the node's value is less than all values in the right subtree
// Complexity is O(n) time and space

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

function bstChecker(treeRoot) {

  // start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  var nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({node: treeRoot, lowerBound: -Infinity, upperBound: Infinity});

  // depth-first traversal
  while (nodeAndBoundsStack.length) {
    var nodeAndBounds = nodeAndBoundsStack.pop();
    var node = nodeAndBounds.node,
    lowerBound = nodeAndBounds.lowerBound,
    upperBound = nodeAndBounds.upperBound;

    if (node.value < lowerBound || node.value > upperBound) {
      return false;
    }

    if (node.left) {
      nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});
    }

    if (node.right) {
      nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
    }
  }

  return true;
};

var tree = new BinaryTreeNode(50);
bstChecker(tree);

// Recursive solution below

// function bstCheckerRecursive(treeRoot, lowerBound, upperBound) {

//   lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : -Infinity;
//   upperBound = (typeof upperBound !== 'undefined') ? upperBound :  Infinity;

//   if (!treeRoot) return true;

//   if (treeRoot.value > upperBound || treeRoot.value < lowerBound) {
//     return false;
//   }

//   return bstCheckerRecursive(treeRoot.left, lowerBound, treeRoot.value) &&
//     bstCheckerRecursive(treeRoot.right, treeRoot.value, upperBound);
// }
