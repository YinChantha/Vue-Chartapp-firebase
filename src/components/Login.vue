<template>
  <form @submit.prevent="handlesubmit">
    <input type="email" required placeholder="email" v-model="email" >
    <input type="password" required placeholder="Password" v-model="password" >
    <button>Log In</button>
    <div class="error">{{error}}</div>
  </form>
</template>

<script>
import {ref} from 'vue'
import Uselogin from '../composable/Uselogin'
export default {
setup(props, context){
    const {error, login} = Uselogin()
    // ref 
    const email = ref('') 
    const password = ref('')

    const handlesubmit = async () => {
        await login(email.value, password.value)
        if(!error.valuer){
          context.emit ('login')
        }
    }
    return {email, password, handlesubmit,error}
}
}
</script>

<style>

</style>