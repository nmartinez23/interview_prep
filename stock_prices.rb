# this assumes you buy before you sell. O(n) time and O(1) space. We only loop through the array once.

def get_max_profit(stock_prices_yesterday)
  # check if there are at least two prices or else throw an error
  if stock_prices_yesterday.length < 2
      raise IndexError, 'Getting a profit requires at least 2 prices'
  end
    
  # using the greedy approach, update min_price and max_profit, initialize them to the
  # first price and the first possible profit
  min_price = stock_prices_yesterday[0]
  max_profit = stock_prices_yesterday[1] - stock_prices_yesterday[0]
    
  # loop through array with the value set to the parameter current_price and the index
  # position set to the parameter index
  stock_prices_yesterday.each_with_index do |current_price, index|

    # skip the first index position, already used when we initialized min_price
    if index == 0 then next end
            
      potential_profit = current_price - min_price
        
      # update max_profit to the maximum amount compared between the two
      max_profit = [max_profit, potential_profit].max
        
      # update min_price to the minimum amount compared between the two
      min_price = [min_price, current_price].min
  end
  return max_profit
end

# run your function through some test cases here
# remember: debugging is half the battle!
arr = [10, 7, 5, 8, 11, 9]
puts get_max_profit(arr)
