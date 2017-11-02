
# Class Person should accept one argument for "name" when instantiated. Create greeting method that takes one argument
# for another person's name. Method should print a string of the Person greeting the other person.

class Person
  attr_accessor :name

  def initialize(name)
    @name = name
  end
  
  def greeting(other_name)
    "Hi #{other_name}, my name is #{name}"
  end
end

person = Person.new("Nick")
puts person.greeting("Nessa")
