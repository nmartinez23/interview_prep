# Create grader method that takes one argument that is a float between 0 and 1. 

def grader(score)
  if score > 1 || score < 0.6
    return 'F'
  elsif score >= 0.9
    return 'A'
  elsif score >= 0.8
    return 'B'
  elsif score >= 0.7
    return 'C'
  else
    return 'D'
  end
end

puts grader(0.5) 	#F
