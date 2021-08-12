<template>
  <div class="modal fade" tabindex="-1" :id="'updateCommentsAdmin' + com.id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modifier {{ com.id }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Name :
              </label>
              <input
                type="textarea"
                class="form-control mb-3"
                id="exampleFormControlInput1"
                v-model="content"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="reload"
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary" @click="onClick">
            Submit changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "updateComAdmin",
  props: ["com"],
  data() {
    return {
      id: this.com.id,
      content: this.com.content,
    };
  },
  methods: {
    async onClick() {
      await this.$store.dispatch("comments/updateCommentsAdmin", {
        id: this.id,
        content: this.content,
      });
    },

    reload() {
      this.$router.go();
    },
  },
};
</script>
