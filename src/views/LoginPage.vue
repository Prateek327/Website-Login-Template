<template>
    <v-row :justify="'center'" :align="'center'" class="fill-height">
        <v-col cols="auto">
            <v-card>
                <v-card-title> <div class="theme-color"> Login </div> </v-card-title>
                <v-form @submit.prevent="loginUser">
                   <v-container>
                      <v-text-field 
                         label="Username or E-mail" 
                         v-model="userIdentity"
                         :error-messages="userIdentityErrors"
                         @input="$v.userIdentity.$touch()"
                         @blur="$v.userIdentity.$touch()"
                         filled
                         required></v-text-field>
                      <v-text-field
                         :type="'password'" 
                         label="Password"
                         v-model="password"
                         :error-messages="passwordErrors"
                         @input="$v.password.$touch()"
                         @blur="$v.password.$touch()"
                         filled
                         required></v-text-field>
                      <v-row>
                          <v-col cols="auto">
                               <v-btn type="submit" :loading="status.loggingIn" depressed color="primary">
                                   Submit
                                </v-btn> 
                           </v-col>
                           <v-col cols="auto">
                             <v-btn plain>
                                   Forget password?
                             </v-btn> 
                            </v-col>
                      </v-row>
                    </v-container>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>

import validationMixin from '../mixins/validationMixins'
import { mapState, mapActions } from 'vuex'


export default {
  mixins: [validationMixin],
  computed: {
      ...mapState('account', ['status'])
  },
  methods: {
      ...mapActions('account', ['login']),
      loginUser (){
          const { userIdentity, password} = this;
          if (this.passedAllValidations()){
              this.login({ userIdentity, password });
          }
      },
      passedAllValidations(){
          this.$v.$touch(); 
          return (!this.userIdentityErrors.length && !this.passwordErrors.length);
      }
  }
};

</script>

<style>

</style>