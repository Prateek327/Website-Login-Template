<template>
   <v-footer padless app color="deep-purple accent-4" dark>
      <v-col
        class="text-center"
        cols="12">
        {{ new Date().getFullYear() }} — <strong> {{ this.$store.state.companyName }} </strong>
      </v-col>
    </v-footer>
</template>