<template>
  <body class="u-body">
    <section class="u-clearfix u-custom-color-1 u-section-1" id="sec-d2f5">
      <div class="u-clearfix u-sheet u-sheet-1">
        <span class="u-icon u-icon-circle u-text-custom-color-3 u-icon-1"
          ><svg
            class="u-svg-link"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 45.532 45.532"
            style=""
          >
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#svg-d98c"
            ></use></svg
          ><svg
            class="u-svg-content"
            viewBox="0 0 45.532 45.532"
            x="0px"
            y="0px"
            id="svg-d98c"
            style="enable-background: new 0 0 45.532 45.532"
          >
            <g>
              <path
                d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765   S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53   c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012   c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592   c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"
              ></path>
            </g></svg
        ></span>
        <div class="u-form u-form-1">
          <form
            @submit.prevent="onSub"
            action="#"
            method="POST"
            class="u-clearfix u-form-spacing-27 u-form-vertical u-inner-form"
            source="custom"
            name="form-1"
            style="padding: 50px"
          >
            <div class="u-form-group u-form-name">
              <label
                for="name-761a"
                class="u-form-control-hidden u-label"
              ></label>
              <input
                type="text"
                v-model="name"
                placeholder="Enter your Name"
                id="name-761a"
                name="name"
                class="
                  u-border-1 u-border-grey-30 u-input u-input-rectangle u-white
                "
                required=""
              />
            </div>
            <div class="u-form-email u-form-group">
              <label
                for="email-761a"
                class="u-form-control-hidden u-label"
              ></label>
              <input
                type="email"
                v-model="email"
                placeholder="Enter a valid email address"
                id="email-761a"
                name="email"
                class="
                  u-border-1 u-border-grey-30 u-input u-input-rectangle u-white
                "
                required=""
              />
            </div>
            <div class="u-form-group u-form-group-3">
              <label
                for="text-aba1"
                class="u-form-control-hidden u-label"
              ></label>
              <input
                type="password"
                v-model="password"
                placeholder="Password"
                id="text-aba1"
                name="text-1"
                class="
                  u-border-1 u-border-grey-30 u-input u-input-rectangle u-white
                "
              />
            </div>
            <div class="u-form-group u-form-group-4">
              <label
                for="text-84c1"
                class="u-form-control-hidden u-label"
              ></label>
              <input
                type="password"
                v-model="c_password"
                placeholder="Confirm Password"
                id="text-84c1"
                name="text-2"
                class="
                  u-border-1 u-border-grey-30 u-input u-input-rectangle u-white
                "
              />
            </div>

            <div class="u-align-left u-form-group u-form-submit">
              <button type="submit" class="btn btn-success">Submit</button>
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
  name: "form",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      c_password: "",
    };
  },

  methods: {
    async onSub() {
      await this.$store.dispatch("users/addUser", {
        name: this.name,
        email: this.email,
        password: this.password,
        c_password: this.c_password,
      });
          this.$router.push('login')
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/Register.css");
@import url("../assets/css/nicepage.css");
</style>
