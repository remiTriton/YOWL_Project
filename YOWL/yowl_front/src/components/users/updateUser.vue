<template>
  <div class="modal fade" tabindex="-1" :id="'updateUser' + user.id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modifier {{ user.name }}</h5>
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
                type="text"
                class="form-control mb-3"
                id="exampleFormControlInput1"
                v-model="name"
              />
              <input
                type="text"
                class="form-control mb-3"
                id="exampleFormControlInput1"
                v-model="email"
              />
              <input
                type="password"
                class="form-control mb-3"
                id="exampleFormControlInput1"
                v-model="password"
              />
              <input
                type="password"
                class="form-control mb-3"
                id="exampleFormControlInput1"
                v-model="c_password"
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
  name: "updateUser",
  props: ["user"],
  data() {
    return {
      id:this.user.id,
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      c_password: this.user.c_password,
    };
  },
  methods: {
    async onClick() {
      await this.$store.dispatch("users/updateUser", {
        id:this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        c_password: this.c_password,
      });
    },

    reload() {
      this.$router.go();
    },
  },
};
</script>
