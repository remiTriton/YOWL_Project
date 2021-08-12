<template>
  <button type="button" class="btn btn-outline-danger btn-sm" @click="onClick">
    Delete
  </button>
</template>
<script>
export default {
name :'delete',
props : ["id"],


  data() {
    return {
      comment: {},
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("comments/deleteComAdmin", this.id);
      console.log("lolilol")
    },
  },
};
</script>