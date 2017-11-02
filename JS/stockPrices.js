// This assumes you buy stock before you sell.
// Complexity is O(n) time and O(1) space. We only loop through the array once.

function getMaxProfit (stockPricesYesterday) {
  // make sure we have at least 2 prices
  if (stockPricesYesterday.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }
  // greedy approach: update minPrice and maxProfit, initialize them to
  // to first price and first possible profit
  var minPrice = stockPricesYesterday[0];
  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  // start iteration at index 1 since we cannot sell until we buy (index 0)
  for (var i = 1; i < stockPricesYesterday.length; i++) {
    var currentPrice = stockPricesYesterday[i];
    var potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
};

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
