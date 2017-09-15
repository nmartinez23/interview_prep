def is_even?(n)
  remainder_when_divided_by_2 = n % 2
  if remainder_when_divided_by_2 == 0
    return true
  else
    return false
  end
end


def is_odd?(n)
 return ! is_even?(n)
end

puts "1 is_even? #{is_even?(1)} - is_odd? #{is_odd?(1)}"
puts "2 is_even? #{is_even?(2)} - is_odd? #{is_odd?(2)}"
puts "3 is_even? #{is_even?(3)} - is_odd? #{is_odd?(3)}"
puts "4 is_even? #{is_even?(4)} - is_odd? #{is_odd?(4)}"
