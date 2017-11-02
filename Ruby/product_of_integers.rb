# You have an array of integers, and for each index you want to find the product of every
# integer except the integer at that index.
# Write a function that takes an array of integers and returns an array of the products.
# This algorithm uses a greedy approach. Complexity is O(n) time and O(n)O(n) space. We make two passes
# through our input an array, and the array we build always has the same length as the input array.

def product(int_array)
  products_of_all_ints_except_at_index = []
    
  # for each integer, we find the product of all the integers
  # before it, storing the total product so far each time
  product_so_far = 1
  i = 0
  while i < int_array.length
    products_of_all_ints_except_at_index[i] = product_so_far
    product_so_far *= int_array[i]
    i += 1
  end
    
  # for each integer, we find the product of all the integers
  # after it. Since each index in products already has the
  # product of all the integers before it, now we're storing
  # the total product of all other integers
  product_so_far = 1
  i = int_array.length - 1
  while i >= 0
    products_of_all_ints_except_at_index[i] *= product_so_far
    product_so_far *= int_array[i]
    i -= 1
  end
  return products_of_all_ints_except_at_index
end

arr = [1, 2, 6, 5, 9]
puts product(arr) 
# [540, 270, 90, 108, 60]
