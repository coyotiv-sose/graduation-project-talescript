class BakerPercentageCalculator {
  constructor(flourWeight, waterWeight, saltWeight, sourdoughWeight, sourdoughHydration, totalWeight) {
    this.flourWeight = flourWeight
    this.waterWeight = waterWeight
    this.saltWeight = saltWeight
    this.sourdoughWeight = sourdoughWeight
    this.sourdoughHydration = sourdoughHydration
    this.totalWeight = totalWeight
  }

  calculate() {
    const total = this.flourWeight + this.waterWeight + this.saltWeight + this.sourdoughWeight
    const waterPercent = ((this.waterWeight / this.flourWeight) * 100).toFixed(2)
    const saltPercent = ((this.saltWeight / this.flourWeight) * 100).toFixed(2)
    const sourdoughPercent = (this.sourdoughWeight / this.flourWeight) * 100

    if (this.sourdoughHydration) {
      // calculate sourdough percentage taking into consideration its hydration
      const sourdoughFlourWeight = (this.sourdoughWeight / 100) * (100 - this.sourdoughHydration)
      const sourdoughWaterWeight = (this.sourdoughWeight / 100) * this.sourdoughHydration
      const sourdoughPercentHydrated = ((sourdoughFlourWeight + sourdoughWaterWeight) / this.flourWeight) * 100
      sourdoughPercent = sourdoughPercentHydrated
    }

    const flourPercent = 100

    return {
      water: waterPercent,
      salt: saltPercent,
      sourdough: sourdoughPercent.toFixed(2),
      flour: flourPercent,
      total: total,
    }
  }
}

// example usage
const percentages = new BakerPercentageCalculator(500, 350, 10, 100, 100, 960).calculate()
console.log(percentages)
