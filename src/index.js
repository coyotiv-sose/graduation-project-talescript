class BakerPercentageCalculator {
  constructor(flourWeight, waterWeight, saltWeight, sourdoughWeight, sourdoughHydration) {
    this.flourWeight = flourWeight
    this.waterWeight = waterWeight
    this.saltWeight = saltWeight
    this.sourdoughWeight = sourdoughWeight
    this.sourdoughHydration = sourdoughHydration
  }

  calculate() {
    const waterPercent = (this.waterWeight / this.flourWeight) * 100
    const saltPercent = (this.saltWeight / this.flourWeight) * 100
    const sourdoughFlourWeight = (this.sourdoughWeight / 100) * (100 - this.sourdoughHydration)
    const sourdoughWaterWeight = (this.sourdoughWeight / 100) * this.sourdoughHydration
    const sourdoughPercent = ((sourdoughFlourWeight + sourdoughWaterWeight) / this.flourWeight) * 100
    const flourPercent = 100

    return {
      water: waterPercent.toFixed(2),
      salt: saltPercent.toFixed(2),
      sourdough: sourdoughPercent.toFixed(2),
      flour: flourPercent,
    }
  }
}

// example usage
const calculator = new BakerPercentageCalculator(500, 350, 10, 100, 100)
const percentages = calculator.calculate()
console.log(percentages)
