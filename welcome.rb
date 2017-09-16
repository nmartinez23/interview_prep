# Create a method that takes a name, city and state as arguments. 
# Return a string welcoming name to your city and state.

def welcome(name, city, state)
  "Hello, #{name.join(' ')}! Welcome to #{city}, #{state}!"
end

puts welcome(['Nick', 'Martin'], 'SF', 'California')
