def is_even?(n)
  remainder_when_divided_by_2 = n % 2
  
  if remainder_when_divided_by_2 == 0
    return true
  else
    return false
  end
end
