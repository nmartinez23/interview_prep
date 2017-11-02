// Write a function that takes an integer k and the headNode of a singly linked list,
// and returns the kth to last node in the list. O(n) time and O(1) space.

function LinkedListNode (value) {
  this.value = value;
  this.next = null;
}

function kthToLastNode (k, head) {
  if (k < 1) {
    throw new Error('Impossible to find less than first to last node: ' + k);
  }
  // get the length of the list
  var listLength = 1;
  var currentNode = head;

  while (currentNode.next) {
    currentNode = currentNode.next;
    listLength += 1;
  }

  if (k > listLength) {
    throw new Error('k is larger than the list length: ' + k);
  }

  var howFarToGo = listLength - k;
  currentNode = head;

  for (var x = 0; x < howFarToGo; x++) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
// returns the node with value "Devil's Food" (the 2nd to last node)
