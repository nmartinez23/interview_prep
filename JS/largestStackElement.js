// Use Stack class to implement a new class MaxStack with a
// function getMax() that returns the largest element in the stack.
// O(1) time for push, pop and getMax. O(m) additional space, where
// m is the number of operations performed on the stack.

function Stack () {
  this.items = [];
}

Stack.prototype.push = function (item) {
  this.items.push(item);
};

Stack.prototype.pop = function () {
  if (!this.items.length) {
    return null;
  }
  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function () {
  if (!this.items.length) {
    return null;
  }
  return this.items[this.items.length - 1];
};

function MaxStack () {
  this.stack = new Stack();
  this.maxStack = new Stack();
}

// If new item is greater than or equal to last item, it's the new max
MaxStack.prototype.push = function (item) {
  this.stack.push(item);

  if (!this.maxStack.peek() || item >= this.maxStack.peek()) {
    this.maxStack.push(item);
  }
  return item;
};

MaxStack.prototype.pop = function () {
  var item = this.stack.pop();

  if (item === this.maxStack.peek()) {
    this.maxStack.pop();
  }
  return item;
};

MaxStack.prototype.getMax = function () {
  return this.maxStack.peek();
};

var result = new MaxStack();
result.push(1);
result.push(3);
result.push(6);
result.pop();
result.getMax();
