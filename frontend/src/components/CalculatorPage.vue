<script>
import axios from 'axios'
import RecipeCreator from 'bakers-math'

export default {
  data() {
    return {
      product: '',
      individualWeight: 0,
      quantity: 0,
      totalPercentage: 0,
      totalWeight: 0,
      flourWeight: 0,
      ingredient: {
        name: '',
        percentage: 0
      },
      ingredients: [],
      recipe: null
    }
  },
  created() {
    this.calculateRecipe()
  },
  methods: {
    async submitRecipe() {
      // change to axiosURL
      if (this.recipe) {
        const response = await axios.post('/recipes', this.recipe)
      }
      // this.$router.push(`/recipes/${response.data._id}`)
    },
    addIngredient(e) {
      if (this.ingredient.name && this.ingredient.percentage > 0) {
        this.ingredients.push({
          name: this.ingredient.name,
          percentage: this.ingredient.percentage,
          weight: 0
        })
        this.ingredient.name = ''
        this.ingredient.percentage = 0
        this.calculateRecipe()
      }
      e.preventDefault()
    },
    calculateRecipe() {
      const creator = new RecipeCreator(this.product, this.individualWeight, this.quantity)
      for (const ingredient of this.ingredients) {
        creator.addIngredient(ingredient.name, ingredient.percentage)
      }
      this.recipe = creator.createRecipe()
      for (let i = 0; i < this.recipe.ingredients.length; i++) {
        this.ingredients[i].weight = this.recipe.ingredients[i].weight
      }
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
          <input type="number" name="weight" id="weight" v-model="individualWeight" />
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
          <th>Weight of each {{ product }}</th>
          <th>Quantity</th>
          <th>Total Flour</th>
        </tr>
        <tr>
          <th>{{ product }}</th>
          <th>{{ individualWeight }}</th>
          <th>{{ quantity }}</th>
          <th>{{ recipe ? recipe.totalWeight : 0 }}</th>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <th>Ingredient</th>
          <th>Percentage</th>
          <th>Weight</th>
        </tr>
        <tr v-for="ingredient in ingredients" :key="ingredient._id">
          <th>{{ ingredient.name }}</th>
          <th>{{ ingredient.percentage }}%</th>
          <td>{{ ingredient.weight }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>
