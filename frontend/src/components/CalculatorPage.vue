<template>
  <div>
    <form action="" method="get">
      <div>
        <label for=""> Page title </label>
        <input type="text" name="" v-model="PageTitle" />
      </div>
      <div>
        <label for=""> Content </label>
        <textarea name="" id="" rows="5"></textarea>
      </div>
      <div>
        <button @click.prevent="pageCreated({ PageTitle })">Create recipe</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    pageCreated: {
      type: Object,
      default(rawProps) {
        return {
          PageTitle: rawProps.PageTitle || '',
          content: rawProps.content || ''
        }
      }
    }
  },
  data() {
    return {
      PageTitle: ''
    }
  }
}
</script>
