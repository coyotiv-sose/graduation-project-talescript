<script>
import axios from 'axios'
import { bakersMath } from 'bakers-math'

export default {
  data() {
    return {
      product: 'buns',
      individualWeight: 0,
      quantity: 0,
      totalPercentage: 0,
      totalWeight: 0,
      flourWeight: 0,
      ingredient: {
        name: '',
        percentage: 0
      },
      ingredients: []
    }
  },
  methods: {
    async submitRecipe() {
      // change to axiosURL
      const response = await axios.post('http://localhost:3000/recipes', {
        name: this.product,
        // individualWeight: this.individualWeight,
        // quantity: this.quantity,
        // totalPercentage: this.totalPercentage,
        // totalWeight: this.totalWeight,
        // flourWeight: this.flourWeight,
        ingredients: this.ingredients
      })
      this.$router.push(`/recipes/${response.data._id}`)
    },
    addIngredient(e) {
      if (this.ingredient.name && this.ingredient.percentage > 0) {
        this.ingredients.push({
          name: this.ingredient.name,
          percentage: this.ingredient.percentage
        })
        this.ingredient.name = ''
        this.ingredient.percentage = 0
      }

      e.preventDefault()
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submitRecipe">
      <div class="grid">
        <div>
          <label for="product"> Bakery Product Name </label
          ><!--req.body.product backend-->
          <input type="text" name="product" id="product" v-model="product" />
        </div>
        <div>
          <label for="weight">Weight of each {{ product }}</label>
          <input type="number" name="weight" id="weight" v-model="weight" />
        </div>
        <div>
          <label for="quantity">How many are you making?</label>
          <input type="number" name="quantity" id="quantity" v-model="quantity" />
        </div>
      </div>

      <div class="grid">
        <div>
          <label for="ingredient"> Ingredient </label>
          <input type="text" name="ingredient" id="ingredient" v-model="ingredient.name" />
        </div>
        <div>
          <label>Percentage<input type="number" v-model="ingredient.percentage" /></label>
        </div>
      </div>
      <button @click="addIngredient">Add Ingredient</button>
      <div>
        <button type="submit">Create recipe</button>
      </div>
    </form>

    <section>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Weight</th>
          <th>Quantity</th>
        </tr>
        <tr>
          <th>{{ product }}</th>
          <th>{{ weight }}</th>
          <th>{{ quantity }}</th>
        </tr>
        <tr>
          <th>Ingredient</th>
          <th>Percentage</th>
        </tr>
        <tr v-for="ingredient in ingredients" :key="ingredient._id">
          <th>{{ ingredient.name }}</th>
          <th>{{ ingredient.percentage }}%</th>
        </tr>
      </table>
      <h2>Recipe</h2>
      <div>
        <p>Product: {{ product }}</p>
        <p>Quantity: {{ quantity }}</p>
        <p>Individual weight: {{ individualWeight }}</p>
        <p>Total percentage: {{ totalPercentage }}</p>
        <p>Total weight: {{ totalWeight }}</p>
        <p>Flour weight: {{ flourWeight }}</p>
      </div>
    </section>
  </div>
</template>
