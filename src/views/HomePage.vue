<template>
    <div>
        <h1>Hi User!</h1>
        <p>You're logged in with Vue + Vuex & JWT!!</p>
        <h3>Users from secure api end point:</h3>
         <v-btn  @click="handleLogout">
            Logout
        </v-btn>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  methods: {
     ...mapActions('account', ['logout']),
     handleLogout(){
          this.logout();
     }
     },
};
</script>