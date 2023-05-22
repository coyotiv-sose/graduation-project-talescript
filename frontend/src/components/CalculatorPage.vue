<script>
// const recipeCreator = require('bakers-math')

export default {
  data() {
    return {
      product: '',
      individualWeight: 0,
      quantity: 0,
      totalPercentage: 0,
      totalWeight: 0,
      flourWeight: 0,
      ingredients: [
        { name: 'Water', weight: 0 },
        { name: 'Yeast', weight: 0 },
        { name: 'Salt', weight: 0 },
        { name: 'Sugar', weight: 0 },
        { name: 'Sourdough', weight: 0 }
      ]
    }
  }
}
//   {
//   product: 'buns',
//   individualWeight: 200,
//   quantity: 4,
//   totalPercentage: 176.4,
//   totalWeight: 800,
//   flourWeight: 454,
//   ingredients: [
//     { name: 'Water', weight: 544 },
//     { name: 'Yeast', weight: 13 },
//     { name: 'Salt', weight: 18 },
//     { name: 'Sugar', weight: 45 },
//     { name: 'Sourdough', weight: 73 }
//   ]
// }
// }
</script>

<template>
  <div>
    <form action="" method="post">
      <div>
        <label for=""> {{ product }} </label>
        <input type="text" name="" v-model="product" />
      </div>
      <div>
        <label for=""> Content </label>
        <textarea name="" id="" rows="5"></textarea>
      </div>
      <div>
        <button @click.prevent="pageCreated({})">Create recipe</button>
      </div>
    </form>
  </div>
</template>
