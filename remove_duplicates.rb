# Define the unique method that removes duplicates from array

def unique(arr)
  my_array = []

  arr.each do |x|
    if !my_array.include?(x)
      my_array << x
    end
  end
  
  my_array
end

example = ['hi', 'hi', 'hey']
puts unique(example)  #hi hey
