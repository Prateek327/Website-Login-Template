<template>
    <v-row :justify="'center'" :align="'center'" class="fill-height">
        <v-col cols="5">
            <v-card>
                <v-card-title> <div class="theme-color"> Register User </div> </v-card-title>
                <v-form>
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
                         v-model="pno"
                         :error-messages="pnoErrors"
                         @input="$v.pno.$touch()"
                         @blur="$v.pno.$touch()"
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
                         v-model="pcode"
                         :error-messages="pcodeErrors"
                         @input="$v.pcode.$touch()"
                         @blur="$v.pcode.$touch()"
                         required
                         filled></v-text-field>
                      <v-row>
                          <v-col cols="auto">
                               <v-btn depressed color="primary">
                                   Submit
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

export default {
  mixins: [validationMixin]
}

</script>

