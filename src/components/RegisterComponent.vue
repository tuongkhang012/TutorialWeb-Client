<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form
            class="text-center border border-primary p-5"
            style="margin-top:70px; height:auto; padding-top:100px !important;"
            @submit.prevent="registerUser"
          >
            <!-- Name -->
            <h3 class="m-3"> REGISTER </h3>
            <input
              type="text"
              id="name"
              class="form-control mb-2"
              placeholder="Name"
              v-model="register.name"
              required
            />
            <!-- Email -->
            <input
              type="email"
              id="email"
              class="form-control mb-2"
              placeholder="Email"
              v-model="register.email"
              required
            />
            <!-- Password -->
            <input
              type="password"
              id="password"
              class="form-control mb-2"
              placeholder="Password"
              v-model="register.password"
            />
            <p>
              Already have an account?? <router-link to="/login">Sign in here!</router-link>
              <!-- Sign up button -->
              <center>
                <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                  Sign up
                </button>
              </center>
            </p>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from "../api/api.js";
  import swal from "sweetalert";
  export default {
    data() {
      return {
        register: {
          name: "",
          email: "",
          password: ""
        }
      };
    },
    methods: {
      async registerUser() {
        try {
            let res = await axios.post("/register", this.register);
            let token = res.data.token;
            if(token){
                localStorage.setItem("jwt", token);
                this.$router.push("/")
                swal("Success", "Registration was successful", "success");
            } else {
                swal("Error", "Something went wrong", "error");
            }
        }
        catch (err) {
            let error = err.res;
            if(error.status == 409){
                swal("Error", error.data.message, "error");
            } else {
                swal("Error", error.data.err.message, "error");
            }
        }
      }
    }
  };
</script>