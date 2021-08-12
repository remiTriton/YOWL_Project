<template>
  <div>
    <form @submit.prevent="onClick" class="formulair">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">New User : </label>
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="name"
          placeholder="Name"
        />
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="email"
          placeholder="Email"
        />
        <input
          type="password"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="password"
          placeholder="Password"
        />
        <input
          type="password"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          v-model="c_password"
          placeholder="Confirm Password"
        />
      </div>

      <button type="submit" class="btn btn-outline-primary">Add User</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addUser",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      c_password: "",
    };
  },

  methods: {
    async onClick() {
      await this.$store.dispatch("users/addUser", {
        name: this.name,
        email: this.email,
        password: this.password,
        c_password: this.c_password,
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

.formulair focus{
    decoration: none;
}
</style>
