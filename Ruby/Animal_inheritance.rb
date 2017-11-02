Class Animal
  Def eat
    Puts “om nom nom”
  End
End

Class Dog < Animal
  Def bark
    Puts “woof”
  End
End

dog = Dog.new
dog.eat
dog.bark

Puts dog.is_a?(Animal) #true
