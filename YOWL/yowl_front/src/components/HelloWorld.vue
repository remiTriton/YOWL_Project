<template>
  <body class="u-body">
    <section class="u-align-center u-clearfix u-section-1" id="carousel_c09b">
      <div
        class="
          u-align-left-lg
          u-align-left-md
          u-align-left-sm
          u-align-left-xs
          u-clearfix
          u-sheet
          u-sheet-1
        "
      >
        <img
          class="u-image u-image-1"
          src="/assets/images/yhfg-min.jpg"
          data-image-width="1920"
          data-image-height="1080"
        />
        <h1
          class="
            u-align-right-lg
            u-align-right-md
            u-align-right-sm
            u-align-right-xs
            u-custom-font
            u-text
            u-title
            u-text-1
          "
        >
          YOWL
        </h1>
        <h2
          class="
            u-align-right-lg
            u-align-right-md
            u-align-right-sm
            u-align-right-xs
            u-text
            u-text-2
          "
        >
          USE<br />
        </h2>
        <h4
          class="
            u-align-right-lg
            u-align-right-md
            u-align-right-sm
            u-align-right-xs
            u-text
            u-text-2
          "
        >
          SHARE<br />
        </h4>
        <h4
          class="
            u-align-right-lg
            u-align-right-md
            u-align-right-sm
            u-align-right-xs
            u-text
            u-text-2
          "
        >
          COMMENT<br />
        </h4>
      </div>
    </section>
    <section
      class="
        u-align-center-lg
        u-align-center-md
        u-align-center-xl
        u-align-left-sm
        u-align-left-xs
        u-clearfix
        u-custom-color-1
        u-section-2
      "
      id="carousel_eac4"
    >
      <div class="u-clearfix u-sheet u-sheet-1">
        <h1 class="u-text u-text-1" id="anime">Anime, Marvel&nbsp;<br /></h1>
        <p class="u-custom-font u-font-pt-sans u-text u-text-2" id="anime">
          “You can do anything you set your mind to.” <br />- Benjamin Franklin
        </p>
        <div
          class="
            u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-1
          "
        ></div>
        <div
          class="
            u-gallery u-layout-grid u-lightbox u-show-text-on-hover u-gallery-1
          "
        >
          <div class="u-gallery-inner u-gallery-inner-1">
            <div
              class="
                u-effect-fade
                u-effect-hover-zoom
                u-gallery-item
                u-gallery-item-1
              "
              v-for="comic in comics.splice(0, 3)"
              :key="comic.id"
            >
              <router-link :to="{ name: 'Detail', params: { id: comic.id } }">
                <div
                  class="u-back-slide"
                  data-image-width="1024"
                  data-image-height="1024"
                >
                  <img class="u-back-image u-expanded" :src="comic.image.url" />
                </div>
              </router-link>
            </div>

            <div
              class="u-effect-fade u-effect-hover-zoom u-gallery-item"
              v-for="anime in animes.splice(0, 3)"
              :key="anime.mal_id"
            >
              <router-link
                :to="{ name: 'detailManga', params: { malId: anime.mal_id } }"
              >
                <div
                  class="u-back-slide"
                  data-image-width="1000"
                  data-image-height="1000"
                >
                  <img class="u-back-image u-expanded" :src="anime.image_url" />
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="u-align-center u-clearfix u-custom-color-2 u-section-4"
      id="carousel_9527"
    >
      <div
        class="
          u-expanded-width
          u-palette-2-base
          u-radius-0
          u-shape
          u-shape-rectangle
          u-shape-1
        "
      ></div>
      <img
        src="/assets/images/srwer.jpg"
        alt=""
        class="u-image u-image-default u-image-1"
        data-image-width="700"
        data-image-height="631"
      />
      <div class="u-align-left u-container-style u-group u-white u-group-1">
        <div class="u-container-layout u-container-layout-1">
          <h1 class="u-text u-text-1">Ready to talk?</h1>
          <div class="u-expanded-width u-form u-form-1">
            <form
              action="#"
              method="POST"
              class="u-clearfix u-form-spacing-27 u-form-vertical u-inner-form"
              style="padding: 0px"
              source="custom"
              name="form"
            >
              <div class="u-form-group u-form-name u-form-group-1">
                <label for="name-30a4" class="u-form-control-hidden u-label"
                  >Name</label
                >
                <input
                  type="text"
                  placeholder="name"
                  id="name-30a4"
                  name="name"
                  class="
                    u-border-2
                    u-border-black
                    u-border-no-left
                    u-border-no-right
                    u-border-no-top
                    u-input
                    u-input-rectangle
                    u-white
                    u-input-1
                  "
                  required=""
                />
              </div>
              <div class="u-form-email u-form-group u-form-group-2">
                <label
                  for="email-cd2c"
                  class="u-form-control-hidden u-label"
                ></label>
                <input
                  type="email"
                  id="email-cd2c"
                  name="email"
                  class="
                    u-border-2
                    u-border-black
                    u-border-no-left
                    u-border-no-right
                    u-border-no-top
                    u-input
                    u-input-rectangle
                    u-white
                    u-input-2
                  "
                  required=""
                  placeholder="email"
                />
              </div>
              <div
                class="u-align-left u-form-group u-form-submit u-form-group-3"
              >
                <a
                  href="#"
                  class="
                    u-active-grey-75
                    u-black
                    u-border-1
                    u-border-active-grey-75
                    u-border-black
                    u-border-hover-grey-75
                    u-btn
                    u-btn-submit
                    u-button-style
                    u-hover-grey-75
                    u-btn-1
                  "
                  >contact us</a
                >
                <input
                  type="submit"
                  value="submit"
                  class="u-form-control-hidden"
                />
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
      </div>
    </section>
    <section
      class="u-align-center u-clearfix u-image u-shading u-section-5"
      id="carousel_6049"
    >
      <div class="u-clearfix u-sheet u-sheet-1">
        <div
          class="
            u-expanded-width-md
            u-expanded-width-sm
            u-expanded-width-xs
            u-list
            u-list-1
          "
        >
          <div class="u-repeater u-repeater-1">
            <div
              class="
                u-align-center
                u-border-2
                u-border-white
                u-container-style
                u-list-item
                u-repeater-item
              "
            >
              <div
                class="
                  u-container-layout
                  u-similar-container
                  u-valign-middle
                  u-container-layout-1
                "
              >
                <span class="u-icon u-icon-circle u-icon-1"
                  ><svg
                    class="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="-15 0 452 452.24"
                    style=""
                  >
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#svg-3ae9"
                    ></use></svg
                  ><svg
                    class="u-svg-content"
                    viewBox="-15 0 452 452.24"
                    id="svg-3ae9"
                  >
                    <path
                      d="m421.71875 75.699219v336.320312h-86.480469l-.429687-.121093 82.0625-282.636719-184.460938-53.5625zm0 0"
                      fill="#00acea"
                    ></path>
                    <path
                      d="m213.550781 70.230469 18.859375 5.46875 184.460938 53.5625-82.0625 282.636719-11.707032 40.339843-322.980468-93.769531 93.769531-322.980469 82.4375 23.933594zm0 0"
                      fill="#00efd1"
                    ></path>
                    <path
                      d="m196.648438 155.71875c-13.75 0-24.898438-11.148438-24.898438-24.898438v-33.242187c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v33.242187c0 4.914063 3.984375 8.898438 8.898438 8.898438 4.917968 0 8.902343-3.984375 8.902343-8.898438v-105.921874c-.007812-4.910157-3.988281-8.890626-8.902343-8.898438h-3.378907c-4.914062.007812-8.894531 3.988281-8.898437 8.898438v34.371093c0 4.417969-3.582032 8-8 8-4.417969 0-8-3.582031-8-8v-34.371093c.015625-13.742188 11.152344-24.882813 24.898437-24.898438h3.378907c13.746093.015625 24.886718 11.15625 24.902343 24.898438v105.921874c-.015625 13.746094-11.15625 24.882813-24.902343 24.898438zm0 0"
                      fill="#f4b844"
                    ></path></svg
                ></span>
                <h3
                  class="
                    u-custom-font
                    u-font-montserrat
                    u-text
                    u-text-body-alt-color
                    u-text-1
                  "
                  data-animation-name="counter"
                  data-animation-event="scroll"
                  data-animation-duration="3000"
                >
                  236
                </h3>
                <p class="u-text u-text-2">posts verify</p>
              </div>
            </div>
            <div
              class="
                u-align-center
                u-border-2
                u-border-white
                u-container-style
                u-list-item
                u-repeater-item
              "
            >
              <div
                class="
                  u-container-layout
                  u-similar-container
                  u-valign-middle
                  u-container-layout-2
                "
              >
                <span class="u-icon u-icon-circle u-icon-2"
                  ><svg
                    class="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 512 512"
                    style=""
                  >
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#svg-61b7"
                    ></use></svg
                  ><svg
                    class="u-svg-content"
                    viewBox="0 0 512 512"
                    x="0px"
                    y="0px"
                    id="svg-61b7"
                    style="enable-background: new 0 0 512 512"
                  >
                    <rect
                      x="10.667"
                      y="234.667"
                      style="fill: #0277bd"
                      width="149.333"
                      height="256"
                    ></rect>
                    <path
                      style="fill: #01579b"
                      d="M160,501.333H10.667C4.776,501.333,0,496.558,0,490.667v-256C0,228.776,4.776,224,10.667,224H160  c5.891,0,10.667,4.776,10.667,10.667v256C170.667,496.558,165.891,501.333,160,501.333z M21.333,480h128V245.333h-128V480z"
                    ></path>
                    <path
                      style="fill: #eceff1"
                      d="M160,448c18.59,13.606,40.965,21.064,64,21.333h197.333c20.571,0.072,37.306-16.546,37.378-37.118  c0.036-10.343-4.23-20.236-11.778-27.309c20.37-2.201,35.1-20.499,32.899-40.869c-0.956-8.848-5.061-17.057-11.565-23.131  c20.373-2.177,35.124-20.458,32.946-40.831c-1.337-12.508-8.921-23.487-20.146-29.164c20.018-12.432,26.167-38.738,13.735-58.756  c-7.763-12.5-21.42-20.118-36.135-20.156H309.333c11.719-30.799,18.905-63.136,21.333-96c0-40-34.667-74.667-53.333-74.667  c-11.512,0.168-22.69,3.894-32,10.667v74.667l-64,138.667L160,256V448z"
                    ></path>
                    <path
                      style="fill: #01579b"
                      d="M421.333,480H224c-25.865-0.206-50.969-8.783-71.552-24.448c-1.999-2.004-3.12-4.721-3.115-7.552V256  c0-4.037,2.279-7.728,5.888-9.536l17.984-9.003l61.461-133.12V32c-0.007-3.242,1.461-6.312,3.989-8.341  c11.226-8.25,24.747-12.791,38.677-12.992c24.683,0,64,39.061,64,85.333c-1.612,29.11-7.359,57.842-17.067,85.333h134.4  c29.455,0,53.333,23.878,53.333,53.333c0.035,13.237-4.916,26.002-13.867,35.755c18.566,18.691,18.464,48.894-0.227,67.46  c-3.591,3.567-7.728,6.54-12.253,8.807c3.32,6.62,5.037,13.928,5.013,21.333c-0.02,18.056-10.212,34.561-26.347,42.667  c3.32,6.62,5.037,13.928,5.013,21.333C469.286,458.508,447.82,479.965,421.333,480z M170.667,443.115  c16.153,9.666,34.517,15.021,53.333,15.552h197.333C436.056,458.655,447.988,446.723,448,432c0.001-7.328-3.053-14.324-8.427-19.307  c-4.291-4.036-4.498-10.787-0.462-15.078c1.729-1.839,4.055-3.005,6.563-3.29c14.517-1.534,25.042-14.547,23.507-29.064  c-0.67-6.34-3.609-12.224-8.275-16.568c-4.291-4.036-4.498-10.787-0.462-15.078c1.729-1.839,4.055-3.005,6.563-3.29  c14.518-1.53,25.046-14.539,23.516-29.056c-0.946-8.98-6.411-16.856-14.492-20.885c-5.235-2.702-7.289-9.135-4.587-14.371  c0.889-1.724,2.232-3.172,3.883-4.189c14.999-9.347,19.581-29.083,10.234-44.082c-5.794-9.298-15.941-14.985-26.896-15.075H309.333  c-5.891-0.003-10.664-4.781-10.661-10.672c0.001-1.296,0.237-2.581,0.699-3.792C310.612,158.61,317.559,127.561,320,96  c0-34.944-30.976-64-42.667-64c-7.482,0.121-14.815,2.108-21.333,5.781v68.885c-0.002,1.546-0.336,3.074-0.981,4.48l-64,138.667  c-1.016,2.192-2.746,3.975-4.907,5.056l-15.445,7.723V443.115z"
                    ></path></svg
                ></span>
                <h3
                  class="
                    u-custom-font
                    u-font-montserrat
                    u-text
                    u-text-body-alt-color
                    u-text-3
                  "
                  data-animation-name="counter"
                  data-animation-event="scroll"
                  data-animation-duration="3000"
                >
                  17
                </h3>
                <p class="u-text u-text-4">like</p>
              </div>
            </div>
            <div
              class="
                u-align-center
                u-border-2
                u-border-white
                u-container-style
                u-list-item
                u-repeater-item
              "
            >
              <div
                class="
                  u-container-layout
                  u-similar-container
                  u-valign-middle
                  u-container-layout-3
                "
              >
                <span class="u-icon u-icon-circle u-icon-3"
                  ><svg
                    class="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 512 512"
                    style=""
                  >
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#svg-9a1e"
                    ></use></svg
                  ><svg
                    class="u-svg-content"
                    viewBox="0 0 512 512"
                    id="svg-9a1e"
                  >
                    <g>
                      <circle cx="432" cy="152" fill="#00357b" r="55"></circle>
                      <path
                        d="m432 207v-110c30.33 0 55 24.67 55 55s-24.67 55-55 55z"
                        fill="#001737"
                      ></path>
                      <path
                        d="m512 308.49v108.17c0 16.73-13.66 30.34-30.46 30.34h-105.48c-8.28 0-15-6.72-15-15 0-14.583-8.06-88.471-8.06-123.51 0-37.21 30.46-67.49 67.9-67.49h23.2c37.44 0 67.9 30.28 67.9 67.49z"
                        fill="#00357b"
                      ></path>
                      <path
                        d="m512 308.49v108.17c0 16.73-13.66 30.34-30.46 30.34h-49.54v-206h12.1c37.44 0 67.9 30.28 67.9 67.49z"
                        fill="#001737"
                      ></path>
                      <circle cx="80" cy="152" fill="#00357b" r="55"></circle>
                      <path
                        d="m80 207v-110c30.33 0 55 24.67 55 55s-24.67 55-55 55z"
                        fill="#001737"
                      ></path>
                      <path
                        d="m159 308.49c0 36.163-8.06 108.265-8.06 123.51 0 8.28-6.72 15-15 15h-106.53c-16.22 0-29.41-13.14-29.41-29.3v-109.21c0-37.21 30.46-67.49 67.9-67.49h23.2c37.44 0 67.9 30.28 67.9 67.49z"
                        fill="#00357b"
                      ></path>
                      <path
                        d="m159 308.49c0 36.163-8.06 108.265-8.06 123.51 0 8.28-6.72 15-15 15h-55.94v-206h11.1c37.44 0 67.9 30.28 67.9 67.49z"
                        fill="#001737"
                      ></path>
                      <circle cx="256" cy="120" fill="#58b354" r="87"></circle>
                      <path
                        d="m256 207v-174c47.97 0 87 39.03 87 87s-39.03 87-87 87z"
                        fill="#00a963"
                      ></path>
                      <path
                        d="m391 362.02v81.96c0 19.31-15.71 35.02-35.02 35.02h-199.96c-19.31 0-35.02-15.71-35.02-35.02v-81.96c0-66.73 54.29-121.02 121.02-121.02h27.96c66.73 0 121.02 54.29 121.02 121.02z"
                        fill="#58b354"
                      ></path>
                      <path
                        d="m391 362.02v81.96c0 19.31-15.71 35.02-35.02 35.02h-99.98v-238h13.98c66.73 0 121.02 54.29 121.02 121.02z"
                        fill="#00a963"
                      ></path>
                    </g></svg
                ></span>
                <h3
                  class="
                    u-custom-font
                    u-font-montserrat
                    u-text
                    u-text-body-alt-color
                    u-text-5
                  "
                  data-animation-name="counter"
                  data-animation-event="scroll"
                  data-animation-duration="3000"
                >
                  108
                </h3>
                <p class="u-text u-text-6">happy clients</p>
              </div>
            </div>
            <div
              class="
                u-align-center
                u-border-2
                u-border-white
                u-container-style
                u-list-item
                u-repeater-item
              "
            >
              <div
                class="
                  u-container-layout
                  u-similar-container
                  u-valign-middle
                  u-container-layout-4
                "
              >
                <span class="u-icon u-icon-circle u-icon-4"
                  ><svg
                    class="u-svg-link"
                    preserveAspectRatio="xMidYMin slice"
                    viewBox="0 0 512 512"
                    style=""
                  >
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#svg-cc59"
                    ></use></svg
                  ><svg
                    class="u-svg-content"
                    viewBox="0 0 512 512"
                    id="svg-cc59"
                  >
                    <g id="Stats_1_">
                      <path d="m0 480h512v32h-512z" fill="#4db5ff"></path>
                      <g fill="#80eaff">
                        <path d="m32 288h96v192h-96z"></path>
                        <path d="m160 192h96v288h-96z"></path>
                        <path d="m288 96h96v384h-96z"></path>
                      </g>
                      <path d="m32 480h96v32h-96z" fill="#4d7cff"></path>
                      <path d="m160 480h96v32h-96z" fill="#4d7cff"></path>
                      <path d="m288 480h96v32h-96z" fill="#4d7cff"></path>
                      <path d="m416 0h96v480h-96z" fill="#80eaff"></path>
                      <path d="m416 480h96v32h-96z" fill="#4d7cff"></path>
                    </g></svg
                ></span>
                <h3
                  class="
                    u-custom-font
                    u-font-montserrat
                    u-text
                    u-text-body-alt-color
                    u-text-7
                  "
                  data-animation-name="counter"
                  data-animation-event="scroll"
                  data-animation-duration="3000"
                >
                  150
                </h3>
                <p class="u-text u-text-8">visits<br /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer
      class="u-align-center u-clearfix u-footer u-grey-80 u-footer"
      id="sec-402c"
    >
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <a href="#">
        <div
          class="u-image u-image-circle u-preserve-proportions u-image-1"
          alt=""
          data-image-width="800"
          data-image-height="800"
        ></div></a>
      </div>
    </footer>
    <section class="u-backlink u-clearfix u-grey-80">
      <a
        class="u-link"
        href="https://nicepage.com/website-templates"
        target="_blank"
      >
        <span>Website Templates</span>
      </a>
      <p class="u-text">
        <span>created with</span>
      </p>
      <a class="u-link" href="https://nicepage.com/" target="_blank">
        <span>Website Builder Software</span> </a
      >.
    </section>
  </body>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["mal_id", "id"],

  created() {
    this.$store.dispatch("api/fetchComics");
    this.$store.dispatch("api/fetchAnimes");
  },
  computed: {
    comics() {
      return this.$store.state.api.comics;
    },
    animes() {
      return this.$store.state.api.animes;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../assets/css/Home.css");
@import url("../assets/css/nicepage.css");

#anime{
  color:white;
}
</style>
