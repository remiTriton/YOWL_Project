<template>
  <body class="u-body">
    <div v-if="animes.length == 1">
      <section
        class="u-align-center u-clearfix u-custom-color-1 u-section-1"
        id="sec-fbec"
      >
        <div class="u-clearfix u-sheet u-sheet-1">
          <!--blog--><!--blog_options_json--><!--{"type":"Recent","source":"","tags":"","count":""}--><!--/blog_options_json-->
          <div class="u-align-center u-blog u-expanded-width u-blog-1">
            <div class="u-repeater u-repeater-1">
              <!--blog_post-->
              <div
                class="
                  u-align-center u-blog-post u-container-style u-repeater-item
                "
              >
                <div
                  class="
                    u-container-layout u-similar-container u-container-layout-1
                  "
                >
                  <!--blog_post_image-->
                  <img
                    alt=""
                    class="
                      u-blog-control
                      u-expanded-width
                      u-image
                      u-image-default
                      u-image-1
                    "
                    :src="animes[0].image_url"
                  /><!--/blog_post_image-->
                  <div
                    class="
                      u-container-style
                      u-custom-color-4
                      u-group
                      u-video-cover
                      u-group-1
                    "
                  >
                    <div class="u-container-layout u-container-layout-2">
                      <!--blog_post_header-->
                      <h2 class="u-align-center u-blog-control u-text u-text-1">
                        <!--blog_post_header_content-->{{ animes[0].title
                        }}<!--/blog_post_header_content-->
                      </h2>
                      <!--/blog_post_header-->
                      <div
                        class="u-image u-image-circle u-image-2"
                        alt=""
                        data-image-width="1000"
                        data-image-height="1500"
                      ></div>
                      <!--blog_post_metadata-->
                      <div class="u-blog-control u-metadata u-metadata-1">
                        <!--blog_post_metadata_date-->
                        <span class="u-meta-date u-meta-icon"
                          ><!--blog_post_metadata_date_content-->From
                          {{ animes[0].aired.string }}
                          <!--/blog_post_metadata_date_content--></span
                        ><!--/blog_post_metadata_date-->
                      </div>
                      <!--/blog_post_metadata-->

                      <p class="u-align-center u-text u-text-2">
                        <br />Ranking : {{ animes[0].rank }}
                        <br />
                        <i>{{ animes[0].score }}/10</i>
                      </p>
                      <br />
                      <p>{{ animes[0].synopsis }}</p>
                      <br />
                      <br />
                      <span class="u-icon u-icon-2"> </span>
                    </div>
                  </div>
                </div>
              </div>
              <!--/blog_post-->
            </div>
          </div>
          <!--/blog-->
        </div>
           <div v-for="com in comments" :key="com.id">
          <div v-for="user in users" :key="user.id">
            <div v-if="com.wallmart_id == animes[0].mal_id">
              <div class="cards" v-if="com.user_id == user.id">
         <div class="card mb-4">
          <div class="card-body">
              
                <p>{{com.content}}</p>
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
              
                <p class="small mb-0 ms-2">{{user.name }} - {{com.updated_at}}</p>
              </div>
              <div class="d-flex flex-row align-items-center">
                 <Supress :id="com.id" />
                    <Update :com="com" />
                    <button
                      type="button"
                      class="btn btn-outline-light btn-sm"
                      data-bs-toggle="modal"
                      :data-bs-target="'#updateComments' + com.id"
                    >
                      ✎ 
                    </button>
              </div>
            </div>
          </div>
        </div>
           </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="u-align-center u-clearfix u-custom-color-3 u-section-2"
        id="sec-fca8"
      >
        <div class="u-clearfix u-sheet u-sheet-1">
          <h2 class="u-custom-font u-text u-text-default u-text-1">
            YOWL Comment
          </h2>
          <h4 class="u-custom-font u-text u-text-default u-text-2">
            Share your vision
          </h4>
          <div class="u-form u-form-1">
            <form
              action="#"
              method="POST"
              class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
              style="padding: 10px"
              source="custom"
              name="form"
            >
              <div class="u-form-group u-form-message">
                <label for="message-3b9a" class="u-form-control-hidden u-label"
                  >Message</label
                >
                <textarea
                  placeholder="Enter your message"
                  rows="4"
                  cols="50"
                  id="message-3b9a"
                  name="message"
                  class="
                    u-border-1
                    u-border-grey-30
                    u-input
                    u-input-rectangle
                    u-white
                  "
                  v-model="content"
                  required=""
                ></textarea>
              </div>

              <div class="u-align-center u-form-group u-form-submit">
                <button
                  type="submit"
                  @click.prevent="onClick"
                  value="{{animes[0].mal_id}}"
                  class="btn btn-outline-primary btn-sm"
                >
                  Add Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer
        class="u-align-center u-clearfix u-footer u-grey-80 u-footer"
        id="sec-402c"
      >
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div
            class="u-image u-image-circle u-preserve-proportions u-image-1"
            alt=""
            data-image-width="800"
            data-image-height="800"
          ></div>
        </div>
      </footer>
    </div>
  </body>
</template>

<script>
import Supress from "@/components/comments/supressOne.vue";
import Update from "@/components/comments/updateOne.vue";
import { mapState } from "vuex";

export default {
  name: "DetailManga",
  components: {
    Supress,
    Update,
  }, 
  data() {
    return {
      content: "",
      wallmart_id: "",
    };
  },
   created() {
    this.$store.dispatch("api/fetchAnAnime", Number(this.$route.params.malId));
    this.$store.dispatch("comments/fetchComments");
    this.$store.dispatch("users/fetchUsers");
  },
  computed: {
    ...mapState('api', ['animes']),
    comments() {
      return this.$store.state.comments.comments;
    },
    users() {
      return this.$store.state.users.users;
    },
  },
  methods: {
    async onClick() {
      await this.$store.dispatch("comments/addComment", {
        content: this.content,
        wallmart_id: this.animes[0].mal_id,
      }),
        this.$router.go();
    },
  },
};
</script>
<style scoped>
@import url("../assets/css/Print.css");
@import url("../assets/css/nicepage.css");
.cards {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  
}

.card {
  width:500px;
  display: flex;
  height:auto;
box-shadow: 12px 12px 2px 1px #82B1FF;  background-color:#417096;
}

.card h5,
p {
  color: white;
}

.card h6 {
  color: white;
}

.card button {
  width: 30px;
}
</style>