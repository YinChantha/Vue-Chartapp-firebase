<template>
  <form @submit.prevent="handlesubmit">
    <input type="email" required placeholder="email" v-model="email" >
    <input type="text" required placeholder="display name" v-model="displayName" >
    <input type="password" required placeholder="Password" v-model="password" >
    <button>Sign Up</button>
    <div class="error">{{error}}</div>
  </form>
</template>

<script>
import {ref} from 'vue'
import Usesignup from '../composable/Usesignup'
export default {
setup(props, context){
    const { error ,signup} = Usesignup()
    // ref 
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handlesubmit = async() => {
      await signup(email.value, password.value, displayName.value)
       if(!error.valuer){
          context.emit('signup')
        }
    }
    return {displayName, email, password, handlesubmit,error  }
}
}
</script>

<style>

</style>