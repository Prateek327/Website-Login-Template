<template>
<div id='navigation'>
    <v-app-bar
        color="deep-purple accent-4"
        dark
        app
        dense>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
       
        <v-toolbar-title class="appbar-company-name">{{ this.$store.state.companyName }}</v-toolbar-title>  

        <caption class="appbar-company-caption" > {{ this.$store.state.companyCaption }} </caption>
       
        <v-spacer></v-spacer>
        
        <v-btn class="main-page-button-gradient" router :to="'/register'">
          Register
          <v-icon right>mdi-account-plus</v-icon>
        </v-btn>

        <v-btn class="main-page-button-gradient" router :to="'/login'">
            Login
            <v-icon right>mdi-login</v-icon>
        </v-btn>

      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        app
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item router :to="'/login'">
              <v-list-item-title>
                <v-icon left>mdi-login</v-icon>
                Login
              </v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-icon left>mdi-tshirt-crew</v-icon>
              <v-list-item-title>Categories</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
               <v-icon left>mdi-human-greeting</v-icon>
              <v-list-item-title>Become a seller</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
               <v-icon left>mdi-face-agent</v-icon>
              <v-list-item-title>Contact us</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
</div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  }
}
</script>

<style>

</style>