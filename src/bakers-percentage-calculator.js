// calculates the bakers percentage of a recipe base on the percentage of each ingredient
// with the optional argument of sourdough hydration
class BakersPercentageCalculator {
  constructor(totalWeight, waterPercent, saltPercent, sourdoughPercent, flourPercent, sourdoughHydration = 100) {
    this.totalWeight = totalWeight
    this.waterPercent = waterPercent
    this.saltPercent = saltPercent
    this.sourdoughPercent = sourdoughPercent
    this.flourPercent = flourPercent
    this.sourdoughHydration = sourdoughHydration
  }

  calculateWeights() {
    const flourWeight = (this.flourPercent / 100) * this.totalWeight
    const waterWeight = (this.waterPercent / 100) * flourWeight
    const saltWeight = (this.saltPercent / 100) * flourWeight

    let sourdoughWeight
    if (this.sourdoughHydration === 100) {
      sourdoughWeight = (this.sourdoughPercent / 100) * flourWeight
    } else {
      const sourdoughFlourWeight = (this.sourdoughPercent / (100 + this.sourdoughHydration)) * flourWeight
      sourdoughWeight = (this.sourdoughHydration / 100) * sourdoughFlourWeight
    }

    return {
      flour: flourWeight.toFixed(2),
      water: waterWeight.toFixed(2),
      salt: saltWeight.toFixed(2),
      sourdough: sourdoughWeight.toFixed(2),
    }
  }
}

const calculator = new BakersPercentageCalculator(1000, 70, 2, 20, 100, 80)
const weights = calculator.calculateWeights()
console.log(weights)
