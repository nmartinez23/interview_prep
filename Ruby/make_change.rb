# Write a function that, given an amount of money and an array of coin denominations
# computes the number of ways to make amount of money with coins of the available denominations.
# Using a bottom-up dynamic algorithm and complexity O(n*m) time and O(n) additional space, 
# where n is the amount of money and m is the number of potential denominations.

def change_possibilities(amount, denominations)
  ways_of_doing_n_cents = [0] * (amount + 1)
  ways_of_doing_n_cents[0] = 1
    
  denominations.each do |coin|
    (coin..amount).each do |higher_amount|
      higher_amount_remainder = higher_amount - coin
      ways_of_doing_n_cents[higher_amount] += ways_of_doing_n_cents[higher_amount_remainder]
    end
  end
  return ways_of_doing_n_cents[amount]
end

# run your function through some test cases here
# remember: debugging is half the battle!
puts change_possibilities(5, [1,3,5]) # answer is 3
