<template>
  <div class="header">
    <router-link to="/">
      <img src="/assets/images/RT-BG-BC-1.jpg" class="logo" />
    </router-link>
    <nav class="linksto">
      <router-link to="/" @click.prevent="logout" class="links" v-if="isLogged"
        >Logout
      </router-link>
      <router-link to="Login" class="links" v-if="!isLogged">Login</router-link>
      <router-link to="Register" class="links" v-if="!isLogged"
        >Register</router-link
      >
      <router-link to="Product" class="links">Product</router-link>
      <router-link to="crud" class="links" v-if="isLogged"
        >Crud Com's</router-link
      >
      <router-link to="adminuser" class="links" v-if="isLogged"
        >Crud Users's</router-link
      >
      <router-link to="kpi" class="links" v-if="isLogged">KPI</router-link>
      <form class="search-box" @submit.prevent="onClick">
        <input
          type="search"
          placeholder="   Search"
          class="form-control"
          id="searchbar"
          required
          v-model="query"
        />
      </form>
    </nav>
  </div>
</template>
<script>
// import { ref } from "vue";
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      query: "",
    };
  },
  computed: {
    ...mapState("comments", ["comments"]),
    animes() {
      return this.$store.state.api.animes;
    },
    comics() {
      return this.$store.state.api.comics;
    },
    isLogged() {
      return this.$store.state.users.token !== null;
    },
  },

  methods: {
    logout() {
      this.$store.dispatch("users/logout");
    },

   async onClick() {
       await this.$store.dispatch("api/search", this.query);
        // this.$store.dispatch("comments/fetchComments");
    },
  },
};
</script>

<style>
#searchbar {
  margin-top: 0;
  border-radius: 30px;
  border: 1px solid rgb(31, 31, 97);
  font-size: 15px;
}

.header {
  flex-wrap:wrap;
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  margin-bottom: 25px;
}
.linksto {
    flex-wrap:wrap;

  display: flex;
  padding: 25px;
}
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: indianred;
  cursor: pointer;
}
.links {
  margin-top: 5px;
  margin-right: 25px;
  margin-left: 25px;
  color: rgb(31, 31, 97);
}
.logo {
  margin-top: 5px;
  width: 50px;
}

.links a:hover {
  color: rgb(31, 31, 97);
}
</style>