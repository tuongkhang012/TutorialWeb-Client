<template>
  <nav>
    <ul class="nav-bar">
      <li>
        <a class="imglink" href="/">
          <img src="SchaleIcon.png">
        </a>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/test">Test</router-link>
      </li>
      <li>
        <router-link to="/directives">Function</router-link>
      </li>
      <div v-if="isLoggedIn" class="toright">
        <li>
          <router-link @click=logout>Sign out</router-link>
        </li>
      </div>
      <div v-else class="toright">
        <li>
          <router-link to="/login">Sign in</router-link>
        </li>
        <li>
          <router-link to="/register">Sign Up</router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
    export default {
        name:"AppHeader",
        computed: {
          isLoggedIn: function (){
            return this.$sto
          }
        }
    }
</script>

<style>
ul.nav-bar .imglink {
  background-color: turquoise;
}
ul.nav-bar img {
  margin: -16px -16px;
  padding: 0;
  height: 60px;
  width: 60px;
  overflow: hidden;
}
ul.nav-bar{
  position: fixed;
  top: 0;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #D6D6D6;
  position: sticky;
}

ul.nav-bar li {
  display: inline;
  float: left;
}

ul.nav-bar div.toright {
  display: inline;
  float: right;
}

ul.nav-bar li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul.nav-bar li a:hover:not(.active) {
  color: black;
  background-color: white;
}

.active {
  background-color: #000dff;
}
</style>