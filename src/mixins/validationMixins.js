import { required, minLength, maxLength, email, numeric, sameAs} from 'vuelidate/lib/validators'

export default {
    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long')
            !this.$v.name.minLength && errors.push('Name must be at least 4 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
          },  
          usernameErrors () {
            const errors = []
            if (!this.$v.username.$dirty) return errors
            !this.$v.username.maxLength && errors.push('Username must be at most 15 characters long')
            !this.$v.username.minLength && errors.push('Username must be at least 5 characters long')
            !this.$v.username.required && errors.push('Username is required.')
            return errors
          },
          userIdentityErrors () {
            const errors = []
            if (!this.$v.userIdentity.$dirty) return errors
            !this.$v.userIdentity.minLength && errors.push('Username/Email must be at least 5 characters long')
            !this.$v.userIdentity.required && errors.push('Username/Email is required.')
            return errors
          },
          passwordErrors () {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.required && errors.push('Password is required')
            return errors
          },
          repeatPasswordErrors () {
            const errors = []
            if (!this.$v.rPassword.$dirty) return errors
            !this.$v.rPassword.required && errors.push('Repeat password is required')
            !this.$v.rPassword.sameAsPassword && errors.push('Password and Repeat passoword not same')
            return errors
          },
          emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.required && errors.push('Email is required')
            !this.$v.email.email && errors.push('Email is invalid')
            return errors
          },
          pnoErrors () {
            const errors = []
            if (!this.$v.phoneNumber.$dirty) return errors
            !this.$v.phoneNumber.required && errors.push('Phone number is required')
            !this.$v.phoneNumber.numeric && errors.push('Phone number should be numeric')
            !this.$v.phoneNumber.maxLength && errors.push('Phone number should be 10 digits')
            !this.$v.phoneNumber.minLength && errors.push('Phone number should be 10 digits')
            return errors
          },
          addressErrors () {
            const errors = []
            if (!this.$v.address.$dirty) return errors
            !this.$v.address.required && errors.push('Address is required')
            !this.$v.address.maxLength && errors.push('Address should be less than 60 characters')
            return errors
          },
          pcodeErrors () {
            const errors = []
            if (!this.$v.pincode.$dirty) return errors
            !this.$v.pincode.required && errors.push('Pincode is required')
            !this.$v.pincode.numeric && errors.push('Pincode should be numeric')
            return errors
          },
    },
    
    validations: {
        name: {required, maxLength: maxLength(20), minLength: minLength(4),},
        username: { required, maxLength: maxLength(15), minLength: minLength(5) },
        userIdentity: { required, minLength: minLength(5)},
        password: { required, minLength: minLength(5)},
        rPassword: { required, minLength: minLength(5), sameAsPassword: sameAs('password')},
        email: { required, email},
        phoneNumber: {required, numeric, maxLength: maxLength(10), minLength: minLength(10)},
        address: {required, maxLength: maxLength(60)},
        pincode: {required, numeric}
    },
    
    data: () => ({
      name: '', 
      username: '',
      password: '',
      rPassword: '',
      email: '',
      phoneNumber: '',
      address: '',
      pincode: '',
      userIdentity :''
    })
};