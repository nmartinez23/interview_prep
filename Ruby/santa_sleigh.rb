# Create a sleigh method that takes a name and password. 
# Return true if name is Santa Claus and password is Ho Ho Ho, else false.

def sleigh(name, password)
  return true if name == "Santa Claus" && password == "Ho Ho Ho!"
  return false
end

puts sleigh('Santa Claus', 'Ho Ho Ho!')  #true
