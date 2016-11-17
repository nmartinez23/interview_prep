// Reverse a linked list. Given the head of the list as one input,
// return the new head of the list. O(n) time and O(1) space.

function LinkedListNode (value) {
  this.value = value;
  this.next = null;
}

function reverse (headOfList) {
  var current = headOfList;
  var previous = null;
  var nextNode = null;

  while (current) {
    // copy a pointer to next before overwriting current.next
    nextNode = current.next;
    // reverse the next pointer
    current.next = previous;

    previous = current;
    current = nextNode;
  }
  return previous;
};

var a = new LinkedListNode(2);
var b = new LinkedListNode(5);
var c = new LinkedListNode(7);
var d = new LinkedListNode(9);

a.next = b;
b.next = c;
c.next = d;
console.log(reverse(a));


