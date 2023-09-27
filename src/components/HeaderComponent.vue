<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">
      <img class="bg-light rounded" src="../../public/SchaleIcon.png" alt="SCHALE" width="64" height="64">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test">Test</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" to="/directives" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Functions
          </router-link>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/students">Students</router-link></li>
            <li><router-link class="dropdown-item" to="/schools">Schools</router-link></li>
            <li><router-link class="dropdown-item" to="/equips">Equipments</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-if="isLoggedIn" class="ms-auto">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/logout">Logout</router-link>
        </li>
      </ul>
    </div>
    <div v-else class="ms-auto">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Sign Up</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:"AppHeader",
}
</script>

<style scoped>
/* ul.nav-bar .imglink {
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
} */
</style> 