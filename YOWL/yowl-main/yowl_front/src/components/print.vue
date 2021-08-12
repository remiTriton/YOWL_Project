<template>
  <body class="u-body">

    <section
      class="
        u-align-center
        u-border-2
        u-border-grey-75
        u-clearfix
        u-custom-color-1
        u-section-1
      "
      id="carousel_ad13"
    >
      
      <!-- <div v-for="com in comments" :key="com.id">
        <div v-for="user in users" :key="user.id">
          <div v-if="com.amazon_id == comic.id">
            <div v-if="com.user_id == user.id">
              <div class="author">{{ user.name }}</div>
              <div class="content">{{ com.content }}</div>
              <div class="u-align-center">{{ com.content }}</div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card" v-for='comic in comics.splice(0,3)' :key="comic.id">
            <img :src="comic.image.url" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ comic.biography["full-name"] }}</h5>
              <p class="card-text">
                      Alter ego : {{ comic.biography["alter-ego"] }}<br/><br/>
                      Aliases : {{ comic.biography.aliases.join() }}<br/><br/>
                      Place of Birth :  {{ comic.biography["place-of-birth"] }}<br/><br/>
                      First Appearance :{{comic.biography["first-appearance"]}}<br/><br/>
                      Publisher : {{ comic.biography["publisher"] }}<br/><br/>
                      Alignment : {{ comic.biography["alignement"] }}<br/><br/>
              </p>
              
              <div v-for="com in comments" :key="com.id">
        <div v-for="user in users" :key="user.id">
          <div v-if="com.amazon_id == comic.id">
            <div v-if="com.user_id == user.id">
              <div class="author">{{ user.name }}</div>
              <div class="content">{{ com.content }}</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
              
        <div class="col mb-4">
          <div
            class="card"
            v-for="anime in animes.splice(0, 3)"
            :key="anime.mal_id"
          >
            <img :src="anime.image_url" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ anime.title }}</h5>
              <p class="card-text">
                {{ anime.synopsis }}
              </p>
              <div v-for="com in comments" :key="com.id">
                <div v-for="user in users" :key="user.id">
                  <div v-if="com.wallmart_id == anime.mal_id">
                    <div v-if="com.user_id == user.id">
                      <div class="author">{{ user.name }}</div>
                      <div class="content">{{ com.content }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </body>
</template>

<script>
export default {
  name: "print",
  data() {
    return {
      content: "",
      amazon_id: "",
    };
  },

  created() {
    this.$store.dispatch("api/fetchComics");
    this.$store.dispatch("comments/fetchComments");
    this.$store.dispatch("users/fetchUsers");
    this.$store.dispatch("api/fetchAnimes");
  },

  computed: {
    animes() {
      return this.$store.state.api.animes;
    },
    comics() {
      return this.$store.state.api.comics;
    },
    comments() {
      return this.$store.state.comments.comments;
    },
    users() {
      return this.$store.state.users.users;
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/Print.css");
@import url("../assets/css/nicepage.css");
</style>



