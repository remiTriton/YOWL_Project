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
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div
            class="card"
            v-for="comic in comics.splice(0, 5)"
            :key="comic.id"
          >
            <div>
              <router-link :to="{ name: 'Detail', params: { id: comic.id } }">
                <img :src="comic.image.url" class="card-img-top" alt=""
              /></router-link>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ comic.name }}</h5>
              <p class="p">
                Alter ego : {{ comic.biography["alter-ego"] }}<br /><br />
                Aliases : {{ comic.biography.aliases.join() }}<br /><br />
                Place of Birth : {{ comic.biography["place-of-birth"]
                }}<br /><br />
                First Appearance :{{ comic.biography["first-appearance"]
                }}<br /><br />
                Publisher : {{ comic.biography["publisher"] }}<br /><br />
                Alignment : {{ comic.biography["alignement"] }}<br /><br />
              </p>
              <div v-for="com in comments" :key="com.id">
                <div v-for="user in users" :key="user.id">
                  <div v-if="com.amazon_id == comic.id">
                    <div class="cardss" v-if="com.user_id == user.id">
                      <div class="carda mb-4">
                        <div class="card-body">

                          <p>{{ com.content }}</p>
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <p class="small mb-0 ms-2">
                                {{ user.name }} - {{ com.updated_at }}
                              </p>
                            </div>
                            <div
                              class="d-flex flex-row align-items-center"
                            ></div>
                          </div>
                        </div>
                      </div>
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
            v-for="anime in animes.splice(0, 5)"
            :key="anime.mal_id"
          >
            <div>
              <router-link
                :to="{ name: 'detailManga', params: { malId: anime.mal_id } }"
              >
                <img :src="anime.image_url" class="card-img-top" alt=""
              /></router-link>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ anime.title }}</h5>
              <p class="p">
                {{ anime.synopsis }}
              </p>
               <div v-for="com in comments" :key="com.id">
                <div v-for="user in users" :key="user.id">
                  <div v-if="com.wallmart_id == anime.mal_id">
                    <div class="cardss" v-if="com.user_id == user.id">
                      <div class="carda mb-4">
                        <div class="card-body">
                          <p>{{ com.content }}</p>
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <p class="small mb-0 ms-2">
                                {{ user.name }} - {{ com.updated_at }}
                              </p>
                            </div>
                            <div
                              class="d-flex flex-row align-items-center"
                            ></div>
                          </div>
                        </div>
                      </div>
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
import { mapState } from 'vuex';

export default {
  name: "print",
  data() {
    return {
     com :{},
    };
  },

  created() {
    this.$store.dispatch("api/fetchComics");
    this.$store.dispatch("comments/fetchComments");
    this.$store.dispatch("users/fetchUsers");
    this.$store.dispatch("api/fetchAnimes");
  },

  computed: {
      ...mapState('comments', ['comments']),

    animes() {
      return this.$store.state.api.animes;
    },
    comics() {
      return this.$store.state.api.comics;
    },
    users() {
      return this.$store.state.users.users;
    },
  }}
</script>

<style scoped>
@import url("../assets/css/Print.css");
@import url("../assets/css/nicepage.css");
.cardss {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
}

.carda {
  width: 500px;
  display: flex;
  height: auto;
  box-shadow: 12px 12px 2px 1px #82b1ff;
  background-color: #417096;
}

.carda h5,
p {
  color: white;
}

.carda h6 {
  color: white;
}

.carda button {
  width: 30px;
}

.p {
  color: black;
}
</style>



