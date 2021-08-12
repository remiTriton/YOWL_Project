<template>
  <body>
    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
          <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
              <img
                src="https://img.icons8.com/bubbles/100/000000/man-in-blue-shirt-pencil.png"
                class="brand_logo"
                alt="Logo"
              />
            </div>
          </div>
          <div class="d-flex justify-content-center form_container">
            <form @submit.prevent='log' method='POST'>
              <div class="input-group mb-3">
                <div class="input-group-append">
                
                </div>
                <input
                  type="text"
                  name=""
                  class="form-control input_user form-rounded"
                  v-model="email"
                  placeholder="Email"
                />
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  
                </div>
                <input
                  type="password"
                  name=""
                  class="form-control input_pass form-rounded"
                  v-model="password"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customControlInline"
                  />
                  <label class="custom-control-label" for="customControlInline"
                    >Remember me</label
                  >
                </div>
              </div>
              <div class="d-flex justify-content-center mt-3 login_container">
                <button type="submit" name="button" class="btn login_btn">
                  Login
                </button>
              </div>
            </form>
          </div>

          <div class="mt-4">
            <div class="d-flex justify-content-center links">
              Don't have an account? <a href="#" class="ml-2">Sign Up</a>
            </div>
            <div class="d-flex justify-content-center links">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  name: "connection",
data(){
  return{
    email:"",
    password:""
      }
  
},
  methods:{
    async log(){
     await this.$store.dispatch('users/login', {
        'email':this.email,
        'password':this.password
      })

      this.$router.push("/")
      console.log(this.email + this.password)
    }
  }


};
</script>
<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width:100%;
  background: #60a3bc !important;
}
.form-rounded {
border-radius: 10px;;
}
.user_card {
    color :white;
  height: 500px;
  width: 800px;
  margin-top: 50px;
  margin-bottom: 10px;
  background:  #094777;

  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius:30px;
}
.brand_logo_container {
    color:white;
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #60a3bc;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: #0b5497 !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #c0392b !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #c0392b !important;
}
</style>