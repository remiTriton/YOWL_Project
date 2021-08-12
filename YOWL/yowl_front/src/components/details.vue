<template>
  <body class="u-body">
    <div v-for="comic in comics" :key="comic.id">
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
                    data-image-width="1552"
                    data-image-height="873"
                    :src="comic.image.url"
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
                        <a class="u-post-header-link" href="blog/post.html"
                          ><!--blog_post_header_content-->{{ comic.name
                          }}<!--/blog_post_header_content--></a
                        >
                      </h2>
                      <!--/blog_post_header-->
                      <div
                        class="u-image u-image-circle u-image-2"
                        alt=""
                        data-image-width="150"
                        data-image-height="150"
                      ></div>
                      <!--blog_post_metadata-->
                      <div class="u-blog-control u-metadata u-metadata-1">
                        <!--blog_post_metadata_date-->
                        <span class="u-meta-date u-meta-icon"
                          ><!--blog_post_metadata_date_content-->{{
                            comic.appearance.race
                          }}<!--/blog_post_metadata_date_content--></span
                        ><!--/blog_post_metadata_date-->
                      </div>
                      <!--/blog_post_metadata-->
                      <p class="u-align-center u-text u-text-2">
                        <br />
                        <br />
                        <br />
                        Full name : {{ comic.biography["full-name"]
                        }}<br /><br />
                        Alter ego : {{ comic.biography["alter-ego"]
                        }}<br /><br />
                        Aliases : {{ comic.biography.aliases.join()
                        }}<br /><br />
                        Place of Birth : {{ comic.biography["place-of-birth"]
                        }}<br /><br />
                        First Appearance :{{
                          comic.biography["first-appearance"]
                        }}<br /><br />
                        Publisher : {{ comic.biography["publisher"]
                        }}<br /><br />
                        Alignment : {{ comic.biography["alignement"]
                        }}<br /><br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comments">
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
              <div class="u-form-group u-form-name">
                <label for="message-3b9a" class="u-form-control-hidden u-label"
                  >Message</label
                >
                <textarea
                  placeholder="Enter your message"
                  rows="4"
                  cols="50"
                  id="message-3b9a"
                  name="message"
                  v-model="content"
                  class="
                    u-border-1
                    u-border-grey-30
                    u-input
                    u-input-rectangle
                    u-white
                  "
                ></textarea>
              </div>
              <div class="u-align-center u-form-group u-form-submit">
                <button
                  type="submit"
                  @click.prevent="onClick"
                  value="{{comics[0].id}}"
                  class="btn btn-outline-primary btn-sm"
                >
                  Add Comment
                </button>
              </div>
              <div class="u-form-send-message u-form-send-success">
                Thank you! Your message has been sent.
              </div>
              <div class="u-form-send-error u-form-send-message">
                Unable to send your message. Please fix errors then try again.
              </div>
              <input type="hidden" value="" name="recaptchaResponse" />
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
export default {
  name: "details",
  data() {
    return {
      content: "",
      amazon_id: "",
    };
  },
  created() {
    this.$store.dispatch("api/fetchAComic", Number(this.$route.params.id));
    this.$store.dispatch("comments/fetchComments");
    this.$store.dispatch("users/fetchUsers");
  },

  computed: {
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

  methods: {
    async onClick() {
      await this.$store.dispatch("comments/addComment", {
        content: this.content,
        amazon_id: this.comics[0].id,
      });
    },
  },
};
</script>
<style scoped>
@import url("../assets/css/Print.css");
@import url("../assets/css/nicepage.css");
</style>

