// Return the largest value of any a & b < k in S (where a < b).
// n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
// k: An integer.

function getMaxLessThanK(n, k) {
  let largest = 0;
  let current = 0;

  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b <= n; b++) {
      current = a & b;
      if (current < k && current < n && current > largest) {
        largest = current;
      }
    }
  }

  return largest;
}
