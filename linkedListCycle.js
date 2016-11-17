// Write a function that takes the first node in a singly-linked
// list and returns a boolean to see if the list contains a cycle.
// O(n) time and O(1) space.

function LinkedListNode (value) {
  this.value = value;
  this.next = null;
}

function containsCycle (firstNode) {
  var slowRunner = firstNode;
  var fastRunner = firstNode;

  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    // case: fastRunner is about to lap slowRunner, there is a cycle
    if (fastRunner === slowRunner) {
      return true;
    };
  }
  // case: fastRunner hit the end of the list, no cycle
  return false;
};

var a = new LinkedListNode(2);
var b = new LinkedListNode(5);
var c = new LinkedListNode(7);
var d = new LinkedListNode(9);

a.next = b;
b.next = c;
c.next = d;
d.next = a;

console.log(containsCycle(a));
