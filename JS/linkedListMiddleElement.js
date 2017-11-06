// Find the middle element of a linked list in one pass.

function LinkedListNode (value) {
  this.value = value;
  this.next = null;
}


function midElement(head) {
  let current = head;
  let next = null;
  let count = 0;

  while (current) {
    next = current.next;
    count++;
    current = next;
  }

  current = head;

  for (var i = 1; i < count; i+= 2) {
    current = current.next;
  }

  return current;
}


let element1 = new LinkedListNode(1);
let element2 = new LinkedListNode(2);
let element3 = new LinkedListNode(3);
let element4 = new LinkedListNode(4);
let element5 = new LinkedListNode(5);

element1.next = element2;
element2.next = element3;
element3.next = element4;
element4.next = element5;

midElement(element1);
