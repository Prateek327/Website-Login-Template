<template>
    <v-row :justify="'center'" :align="'center'" class="fill-height">
        <v-col cols="5">
            <v-card>
                <v-card-title> <div class="theme-color"> Register User </div> </v-card-title>
                <v-form @submit.prevent="registerUser">
                   <v-container>
                      <v-text-field 
                         label="Name" 
                         v-model="name"
                         :error-messages="nameErrors"
                         @input="$v.name.$touch()"
                         @blur="$v.name.$touch()"
                         required
                         filled></v-text-field>
                      <v-text-field 
                         label="Email" 
                         v-model="email"
                         :error-messages="emailErrors"
                         @input="$v.email.$touch()"
                         @blur="$v.email.$touch()"
                         required
                         filled></v-text-field>
                      <v-text-field 
                         label="Username" 
                         v-model="username"
                         :error-messages="usernameErrors"
                         @input="$v.username.$touch()"
                         @blur="$v.username.$touch()"
                         required
                         filled></v-text-field>
                      <v-text-field
                         :type="'password'" 
                         label="Password"
                         v-model="password"
                         :error-messages="passwordErrors"
                         @input="$v.password.$touch()"
                         @blur="$v.password.$touch()"
                         required
                         filled></v-text-field>
                      <v-text-field
                         :type="'password'" 
                         label="Repeat Password"
                         v-model="rPassword"
                         :error-messages="repeatPasswordErrors"
                         @input="$v.rPassword.$touch()"
                         @blur="$v.rPassword.$touch()"
                         required
                         filled></v-text-field>   
                      <v-text-field 
                         label="Phone Number" 
                         v-model="phoneNumber"
                         :error-messages="pnoErrors"
                         @input="$v.phoneNumber.$touch()"
                         @blur="$v.phoneNumber.$touch()"
                         required
                         filled></v-text-field>
                      <v-textarea
                         label="Address" 
                         v-model="address"
                         :error-messages="addressErrors"
                         @input="$v.address.$touch()"
                         @blur="$v.address.$touch()"
                         required
                         autocomplete
                         clearable
                         no-resize
                         rows="3"
                         row-height="15"
                         filled></v-textarea>
                      <v-text-field 
                         label="Pincode" 
                         v-model="pincode"
                         :error-messages="pcodeErrors"
                         @input="$v.pincode.$touch()"
                         @blur="$v.pincode.$touch()"
                         required
                         filled></v-text-field>
                      <v-row>
                          <v-col cols="auto">
                               <v-btn type="submit" :loading="status.registering" depressed color="primary">
                                   Register
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
     ...mapActions('account', ['register']),
     registerUser(){
        if (this.passedAllValidations()){
          this.register(this.$data);
        }
     },
     passedAllValidations(){
        this.$v.$touch(); 
        return (!this.nameErrors.length && !this.usernameErrors.length && !this.passwordErrors.length 
        && !this.repeatPasswordErrors.length && !this.emailErrors.length && !this.pnoErrors.length && !this.addressErrors.length
        && !this.pcodeErrors.length)
     }
  }
}

</script>

