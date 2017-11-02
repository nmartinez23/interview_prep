# Given an array, return only even integers.
def no_odds(values)
  my_array = []
  
  values.each do |value|
    my_array << value if value % 2 == 0
  end
  
  my_array
end

numbers = [1,2,3,4]
puts no_odds(numbers) 	#2, 4
