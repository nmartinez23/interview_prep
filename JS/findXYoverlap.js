// Devise a way to represent dating profiles as rectangles on a 2D plane.
// Write a function to find the rectangular intersection of two given love rectangles.
// Use hashes for lookup. Complexity is O(1) time and O(1) space.

function findRangeOverlap (point1, length1, point2, length2) {

  // find the highest start point and lowest end point.
  var highestStartPoint = Math.max(point1, point2);
  var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  if (highestStartPoint >= lowestEndPoint) {
    return { startPoint: null, overlapLength: null };
  }

  var overlapLength = lowestEndPoint - highestStartPoint;

  return { startPoint: highestStartPoint, overlapLength: overlapLength };
};

function findRectangularOverlap (rect1, rect2) {

  var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    return {
      leftX : null,
      bottomY : null,
      width: null,
      height: null
    };
  }

  return {
    leftX : xOverlap.startPoint,
    bottomY : yOverlap.startPoint,
    width : xOverlap.overlapLength,
    height : yOverlap.overlapLength
  };
}

var person1 = {
  leftX : 1,
  bottomY : 5,
  width : 10,
  height : 4
  }

var person2 = {
  leftX : 3,
  bottomY : 8,
  width : 7,
  height : 2
  }

console.log(findRectangularOverlap(person1, person2));
// answer {"left_x" => 3, "bottom_y" => 8, "width" => 7, "height" => 1}
