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
            <th scope="col">Content</th>
            <th scope="col">Created At</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="com in comments" :key="com.id">
            <updateCom :com="com" />

            <td>{{ com.id }}</td>
            <td>{{ com.content }}</td>
            <td>{{ com.created_at }}</td>
            <td><supress :id="com.id" /></td>
            <td>
              <button
                type="button"
                class="btn btn-outline-info btn-sm"
                data-bs-toggle="modal"
                :data-bs-target="'#updateCommentsAdmin' + com.id"
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <addCom />
  </div>
</template>

<script>
import supress from "@/components/comments/supress.vue";
import updateCom from "@/components/comments/updateCom.vue";
import addCom from "@/components/comments/addCom.vue";
export default {
  name: "crud",
  components: {
    supress,
    updateCom,
    addCom,
  },
  methods: {},
  created() {
    this.$store.dispatch("comments/fetchComments");
  },
  computed: {
    comments() {
      return this.$store.state.comments.comments;
    },
  },
};
</script>
