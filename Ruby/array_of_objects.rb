# create object and also an array of objects. Add properties to both. Access values of both.
obj = {
  "first" => "value 1",
  "second" => "value 2",
  "third" => "value 3"
  }
  
arr_of_objs = [
  {
    1 => "value one",
    2 => "value two"
  },
  {
    "three" => "value three",
    4 => "value four"
  }
]

obj["fourth"] = "value 4"
arr_of_objs.push({5 => "value five"})

puts obj["first"]
puts arr_of_objs[1]["three"]
