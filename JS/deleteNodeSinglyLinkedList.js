// Delete a node from a singly-linked list,
// given only a variable pointing to that node.
// O(1) time and O(1) space.

function LinkedListNode (value) {
  this.value = value;
  this.next = null;
}

function deleteNode (nodeToDelete) {
  var nextNode = nodeToDelete.next;

  if (nextNode) {
    // replace input node's value and pointer with next node's
    // value and pointer. Previous node now skips over input node
    nodeToDelete.value = nextNode.value;
    nodeToDelete.next = nextNode.next;

  } else {
    throw new Error('Cannot delete the last node with this method');
  }
}

var a = new LinkedListNode(2);
var b = new LinkedListNode(5);
var c = new LinkedListNode(7);

a.next = b;
b.next = c;

deleteNode(b);
