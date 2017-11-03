function mealWithTaxAndTip(mealCost, tipPercent, taxPercent) {
  let withTip = (mealCost / 100) * tipPercent;
  let withTax = (mealCost / 100) * taxPercent;
  let totalCost = Math.round(mealCost + withTip + withTax);

console.log("The total meal cost is " + totalCost + " dollars.");
}
