# Check if string has same amount of 'x's and 'o's. 
def XO(str)
  str.downcase.count('x') == str.downcase.count('o')
end

puts XO('ooxx')	#true
