# Given 2 strings, return string of form short+long+short, with shorter string on outside and 
# longer string on inside. Strings will not be the same length, but they may be empty (length0).

def solution(a, b)
  if a.length > b.length
    return (b + a + b).to_s
  else
    return (a + b + a).to_s
  end
end

puts solution('ladee', 'da')  #daladeeda
