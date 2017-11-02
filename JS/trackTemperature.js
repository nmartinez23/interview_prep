// Write a class with these five methods: insert()—records a new temperature,
// get_max()—returns the highest temp we've seen so far, get_min()—returns the
// lowest temp we've seen so far, get_mean()—returns the mean of all temps
// we've seen so far, get_mode()—returns the mode of all temps we've seen so far.
// Temperatures will all be inserted as integers. We'll record our temperatures
// in Fahrenheit, so we can assume they'll all be in the range 0..110. If there
// is more than one mode, return any of the modes.
// Complexity is O(1) time for each function, and O(1) space related to input.

function TempTracker () {

  // for mode
  this.occurences = []; // array of 0's from 0..110
  for (var i = 0; i < 111; i++) {
    this.occurences[i] = 0;
  }
  this.maxOccurences = 0;
  this.mode = null;

  // for mean
  this.totalNumbers = 0;
  this.totalSum = 0;
  this.mean = null;

  // for min and max
  this.minTemp = null;
  this.maxTemp = null;
}

TempTracker.prototype.insert = function (temperature) {

  // for mode
  this.occurences[temperature]++;
  if (this.occurences[temperature] > this.maxOccurences) {
    this.mode = temperature;
    this.maxOccurences = this.occurences[temperature];
  }

  // for mean
  this.totalNumbers++;
  this.totalSum += temperature;
  this.mean = this.totalSum / this.totalNumbers;

  // for min and max
  if (this.maxTemp === null || temperature > this.maxTemp) {
    this.maxTemp = temperature;
  }
  if (this.minTemp === null || temperature < this.minTemp) {
    this.minTemp = temperature;
  }
}

TempTracker.prototype.getMax = function () {
  return this.maxTemp;
};

TempTracker.prototype.getMin = function () {
  return this.minTemp;
};

TempTracker.prototype.getMean = function () {
  return this.mean;
};

TempTracker.prototype.getMode = function () {
  return this.mode;
};

var tempTracker = new TempTracker;
tempTracker.insert(89)
tempTracker.insert(102)
tempTracker.insert(102)
console.log(tempTracker.getMean());
console.log(tempTracker.getMode());
console.log(tempTracker.getMin());
console.log(tempTracker.getMax());

// using attributes only, without getter methods
console.log(tempTracker.mean);
console.log(tempTracker.mode);
console.log(tempTracker.minTemp);
console.log(tempTracker.maxTemp);
