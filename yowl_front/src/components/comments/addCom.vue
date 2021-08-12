<template>
  <div>
    <form @submit.prevent="onClick" class="formulair">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">New Comment : </label>
        <input
          type="textarea"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="content"
          placeholder="Write a comment"
        />
    
      </div>

      <button type="submit" class="btn btn-outline-primary">Add Comment</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addCom",
  data() {
    return {
      content: "",    
    };
  },
  methods: {
    async onClick() {
      await this.$store.dispatch("comments/addComment", {
        content: this.content,

      });
    },
  },
};
</script>

<style scoped>
.formulair {
  margin-right: 25%;
  margin-left: 25%;
  border: 1px solid rgb(3, 1, 80);
  border-radius: 30px;
}


</style>
