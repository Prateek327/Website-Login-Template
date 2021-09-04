<template>
  <v-app dark >
    <nav-bar></nav-bar>
    <v-main>
        <v-alert v-if="alert.message" :type="alert.type">{{ alert.message }}</v-alert>
        <router-view></router-view>
    </v-main>
    <canny-footer></canny-footer>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import { mapState, mapActions } from 'vuex';


export default {
  components:{
    "nav-bar" : Navigation,
    "canny-footer" : Footer
  },
  computed: {
    ...mapState({
        alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (){
      // clear alert on location change
      this.clearAlert();
    }
  }
};
</script>

<style>
  @import './assets/styles/globalStyles.css';
</style>