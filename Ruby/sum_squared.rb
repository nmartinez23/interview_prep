# Given an array of integers, find the sum and then return the sum squared.
def squareSum(arr)
  sum = 0

  arr.each do |num|
    sum = sum + num
  end
  
  return sum * sum
end

numbers = [1,2,3,4]
puts squareSum(numbers)
