function Rectangle(a, b) {
  let rectangle = {
    length: a,
    width: b,
    area: a * b,
    perimeter: 2 * (a + b)
  }

  return rectangle;
}



function Rectangle(length, width) {
  this.area = length * width;
  this.perimeter = (length + width) * 2;
}

let rect = new Rectangle(4, 8);
