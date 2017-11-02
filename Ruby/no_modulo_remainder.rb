# Finding remainder without using % operator
def remainder(dividend, divisor)
  dividend - (dividend / divisor) * divisor
end

puts remainder(6,2) 	#0
