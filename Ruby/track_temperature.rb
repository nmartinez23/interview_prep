# Write a class with these five methods: insert()—records a new temperature,
# get_max()—returns the highest temp we've seen so far, get_min()—returns the lowest temp we've seen so far,
# get_mean()—returns the mean of all temps we've seen so far, get_mode()—returns the mode of all temps we've seen so far.
# Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll 
# all be in the range 0..110. If there is more than one mode, return any of the modes. 
# Complexity is O(1) time for each function, and O(1) space related to input.

class Temp_tracker
  
  def initialize
    # for mode
    @occurrences = [0] * (111) # array of 0s at indices 0..110
    @max_occurrences = 0
    @mode = nil
        
    #for mean
    @total_numbers = 0
    @total_sum = 0.0 # mean should be a float
    @mean = nil
        
    # for min and max
    @min_temp = nil
    @max_temp = nil
  end
    
  def insert(temperature)
    # for mode
    @occurrences[temperature] += 1
    if @occurrences[temperature] > @max_occurrences
      @mode = temperature
      @max_occurrences = @occurrences[temperature]
    end
        
    # for mean
    @total_numbers += 1
    @total_sum += temperature
    @mean = @total_sum / @total_numbers
        
    # for min and max
    if @max_temp.nil? or temperature > @max_temp
      @max_temp = temperature
    end
    if @min_temp.nil? or temperature < @min_temp
      @min_temp = temperature
    end
  end
    
  def get_max
    return @max_temp
  end
    
  def get_min
    return @min_temp
  end
    
  def get_mean
    return @mean
  end
    
  def get_mode
    return @mode
  end
end

# run your function through some test cases here
# remember: debugging is half the battle!
temp_tracker = Temp_tracker.new()
temp_tracker.insert(89)
temp_tracker.insert(102)
# puts temp_tracker.get_mean()
# puts temp_tracker.get_mode()
puts temp_tracker.get_min()
# puts temp_tracker.get_max()


----------------REFACTORED WITHOUT GETTER METHODS----------------

class Temp_tracker
  attr_reader :mean, :mode, :max_temp, :min_temp
  
  def initialize
    # for mode
    @occurrences = [0] * (111) # array of 0s at indices 0..110
    @max_occurrences = 0
    @mode = nil
        
    #for mean
    @total_numbers = 0
    @total_sum = 0.0 # mean should be a float
    @mean = nil
        
    # for min and max
    @min_temp = nil
    @max_temp = nil
  end
    
  def insert(temperature)
    # for mode
    @occurrences[temperature] += 1
    if @occurrences[temperature] > @max_occurrences
      @mode = temperature
      @max_occurrences = @occurrences[temperature]
    end
        
    # for mean
    @total_numbers += 1
    @total_sum += temperature
    @mean = @total_sum / @total_numbers
        
    # for min and max
    if @max_temp.nil? or temperature > @max_temp
      @max_temp = temperature
    end
    if @min_temp.nil? or temperature < @min_temp
      @min_temp = temperature
    end
  end
end

# run your function through some test cases here
# remember: debugging is half the battle!
temp_tracker = Temp_tracker.new()
temp_tracker.insert(89)
temp_tracker.insert(102)
puts temp_tracker.mean
# puts temp_tracker.mode
# puts temp_tracker.min_temp
# puts temp_tracker.max_temp
