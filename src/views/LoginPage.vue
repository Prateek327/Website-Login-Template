<template>
    <v-row :justify="'center'" :align="'center'" class="fill-height">
        <v-col cols="auto">
            <v-card>
                <v-card-title> <div class="theme-color"> Login </div> </v-card-title>
                <v-form>
                   <v-container>
                      <v-text-field 
                         label="Username" 
                         v-model="username"
                         :error-messages="usernameErrors"
                         @input="$v.username.$touch()"
                         @blur="$v.username.$touch()"
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
                               <v-btn depressed color="primary">
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
export default {
  mixins: [validationMixin]
}

</script>

<style>

</style>