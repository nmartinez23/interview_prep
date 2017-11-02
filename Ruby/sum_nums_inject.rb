# Create method that sums the numbers in an array.

numbers = [1,2,3,4]

def sum(arr)
  return 0 if arr.empty?
  sum = 0
  
  arr.inject(sum) { |sum, num| sum + num }
end

puts sum(numbers)
