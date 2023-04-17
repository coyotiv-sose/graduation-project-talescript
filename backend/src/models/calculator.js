function BakersPercentageCalculator(
  totalWeight,
  waterPercent,
  saltPercent,
  sourdoughPercent,
  flourPercent,
  sourdoughHydration = 100
) {
  let optionalIngredients = []

  function addOptionalIngredient(name, percent) {
    optionalIngredients.push({ name, percent })
  }

  function calculateWeights() {
    const flourWeight = (flourPercent / 100) * totalWeight
    const waterWeight = (waterPercent / 100) * flourWeight
    const saltWeight = (saltPercent / 100) * flourWeight

    let sourdoughWeight
    if (sourdoughHydration === 100) {
      sourdoughWeight = (sourdoughPercent / 100) * flourWeight
    } else {
      const sourdoughFlourWeight = (sourdoughPercent / (100 + sourdoughHydration)) * flourWeight
      sourdoughWeight = (sourdoughHydration / 100) * sourdoughFlourWeight
    }

    const optionalIngredientsWeights = optionalIngredients.reduce((acc, { name, percent }) => {
      const weight = (percent / 100) * flourWeight
      acc[name] = weight.toFixed(2)
      return acc
    }, {})

    return {
      flour: flourWeight.toFixed(2),
      water: waterWeight.toFixed(2),
      salt: saltWeight.toFixed(2),
      sourdough: sourdoughWeight.toFixed(2),
      ...optionalIngredientsWeights,
    }
  }

  return {
    addOptionalIngredient,
    calculateWeights,
  }
}

const calculator = BakersPercentageCalculator(1000, 70, 2, 20, 100, 80)
calculator.addOptionalIngredient('poppy seeds', 5)
calculator.addOptionalIngredient('sesame seeds', 5)
const weights = calculator.calculateWeights()
console.log(weights)

export default BakersPercentageCalculator

/* class BakersPercentageCalculator {
  constructor(totalWeight, waterPercent, saltPercent, sourdoughPercent, flourPercent, sourdoughHydration = 100) {
    this.totalWeight = totalWeight
    this.waterPercent = waterPercent
    this.saltPercent = saltPercent
    this.sourdoughPercent = sourdoughPercent
    this.flourPercent = flourPercent
    this.sourdoughHydration = sourdoughHydration
    this.optionalIngredients = []
  }

  addOptionalIngredient(name, percent) {
    this.optionalIngredients.push({ name, percent })
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

    const optionalIngredientsWeights = this.optionalIngredients.reduce((acc, { name, percent }) => {
      const weight = (percent / 100) * flourWeight
      acc[name] = weight.toFixed(2)
      return acc
    }, {})

    return {
      flour: flourWeight.toFixed(2),
      water: waterWeight.toFixed(2),
      salt: saltWeight.toFixed(2),
      sourdough: sourdoughWeight.toFixed(2),
      ...optionalIngredientsWeights,
    }
  }
}

const calculator = new BakersPercentageCalculator(1000, 70, 2, 20, 100, 80)
calculator.addOptionalIngredient('poppy seeds', 5)
calculator.addOptionalIngredient('sesame seeds', 5)
const weights = calculator.calculateWeights()
console.log(weights)
 */
