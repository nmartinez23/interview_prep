#Given a string, reverse the words of the string.
def solution(str)
  str.split(' ').reverse.join(' ')
end

puts solution('hey you') #you hey

# str.split('').reverse.join('') returns uoy yeh
