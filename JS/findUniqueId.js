// Given the array of IDs, which contains many duplicate integers
// and one unique integer, find the unique integer.
// O(n) time, and O(1) space using the XOR bitwise operation
// to cancel out duplicates, leaving only the unique integer.

function findUniqueDeliveryId(deliveryIds) {

  var uniqueDeliveryId = 0;

  deliveryIds.forEach(function(deliveryId) {
    uniqueDeliveryId ^= deliveryId;
  });

  return uniqueDeliveryId;
}

var ids = [1, 6, 9, 10, 6, 10, 9];
findUniqueDeliveryId(ids);
