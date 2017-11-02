# Given a non-negative integer, return an array of the digits in order.

def digitize(numbers)
  arr = []

  numbers.to_s.split('').each do |num|
    arr << num.to_i if num.to_i >= 0
  end
  
  arr.sort()
End


def digitize(numbers)
  arr = []
  result = numbers.to_s.split('')

  result.each do |num|
    if num.to_i >= 0
      arr.push(num.to_i)
    end
  end
  
  return arr.sort()
end

puts digitize(2364)
