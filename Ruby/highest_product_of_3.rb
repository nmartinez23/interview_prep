# Given an array of integers, find the highest product you can get from three of the integers.
# The input array will always have at least three integers. This used the greedy algorithm approach.
# Complexity is O(n) time and O(1)O(1) additional space.

def highest_product_of_3(array_of_ints)
  if array_of_ints.length < 3
    raise Exception, 'Less than 3 items!'
  end
    
  # We're going to start at the 3rd item (at index 2)
  # so pre-populate highests and lowests based on the first 2 items.
  # We could also start these as nil and check below if they're set
  # but this is arguably cleaner
  highest = [array_of_ints[0], array_of_ints[1]].max
  lowest = [array_of_ints[0], array_of_ints[1]].min
  highest_product_of_2 = array_of_ints[0] * array_of_ints[1]
  lowest_product_of_2 = array_of_ints[0] * array_of_ints[1]
    
  # except this one - we pre-populate it for the first /3/ items.
  # This means in our first pass it'll check against itself, which is fine.
  highest_product_of_three = array_of_ints[0] * array_of_ints[1] * array_of_ints[2]
    
  # Walk through items, starting at index 2
  array_of_ints.each_with_index do |current, index|
    next if index < 2
        
    # Do we have a new highest product of 3? It's either the current highest,
    # or the current times the highest product of two
    # or the current times the lowest product of two
    highest_product_of_three = [
        highest_product_of_three,
        current * highest_product_of_2,
        current * lowest_product_of_2
    ].max
        
    # Do we have a new highest product of two?
    highest_product_of_2 = [
        highest_product_of_2,
        current * highest,
        current * lowest
    ].max
        
    # Do we have a new lowest product of two?
    lowest_product_of_2 = [
        lowest_product_of_2,
        current * highest,
        current * lowest
    ].min
        
    # Do we have a new highest and lowest?
    highest = [highest, current].max
    lowest = [lowest, current].min
  end
  return highest_product_of_three
end

# run your function through some test cases here
# remember: debugging is half the battle!
arr1 = [-10, -10, 1, 3, 2] # 300
# arr2 = [2, 5, 8, 9] #360
puts highest_product_of_3(arr1)
