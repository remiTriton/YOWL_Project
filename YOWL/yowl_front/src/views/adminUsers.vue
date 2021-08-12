<template>
  <div>
    <div>
      <table
        class="table table-striped table-dark"
        style="background-color: #131313; color: white"
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">E-Mail</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <updateUser :user="user" />

            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td><supress :id="user.id" /></td>
            <td>
              <button
                type="button"
                class="btn btn-outline-info btn-sm"
                data-bs-toggle="modal"
                :data-bs-target="'#updateUser' + user.id"
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <AddUser />
  </div>
</template>

<script>
import supress from "@/components/users/supress.vue";
import updateUser from "@/components/users/updateUser.vue";
import AddUser from "@/components/users/addUserCrud.vue";

export default {
  name: "adminUser",
  components: {
    supress,
    updateUser,
    AddUser,
  },
  created() {
    this.$store.dispatch("users/fetchUsers");
  },
  computed: {
    users() {
      return this.$store.state.users.users;
    },
  },
};
</script>
