<template>
  <button type="button" class="btn btn-danger btn-sm" @click="onClick">
X  </button>
</template>
<script>
export default {
name :'Supress',
props : ["id"],


  data() {
    return {
      comment: {},
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("comments/deleteCom", this.id);
      console.log("lolilol")
    },
  },
};
</script>