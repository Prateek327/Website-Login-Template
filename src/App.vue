<template>
  <v-app dark >
    <nav-bar></nav-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
    <canny-footer></canny-footer>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    "nav-bar" : Navigation,
    "canny-footer" : Footer
  }
}
</script>

<style>
  @import './assets/styles/globalStyles.css';
</style>