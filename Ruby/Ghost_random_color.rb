# Create class Ghost. Ghost objects are instantiated without any arguments. 
# Ghost objects are given a random color attribute when instantiated.

class Ghost
  attr_accessor :color

  def initialize
    self.color = ["white", "yellow", "purple", "red"].sample
  end
end

ghost = Ghost.new
puts ghost.color  #=> "white" or "yellow" or "purple" or "red"
