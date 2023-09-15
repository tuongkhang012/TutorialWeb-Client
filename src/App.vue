<template>
  <AppHead />
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
  import AppHeader from './components/HeaderComponent.vue'
  import AppFooter from './components/FooterComponent.vue'
  import AppHead from './components/HeadComponent.vue'

  export default {
  name: "App",
    components: {
      AppHeader, AppFooter, AppHead
    },
    data() {
        return {

        };
    },
    methods: {
        
    },
}
</script>

<style>
#app {
  font-family: Helvetica, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
