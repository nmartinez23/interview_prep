def pythagorean_theorem(a, b)
 a_squared = square(a)
 b_squared = square(b)
 a_squared_plus_b_squared = a_squared + b_squared
 
 return Math.sqrt(a_squared_plus_b_squared)
end

puts pythagorean_theorem(5, 12)
