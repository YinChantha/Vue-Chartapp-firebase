<template>
  <div class="welcome container">
    <div v-if="showlogin">
      <p>Welcome to our group Chartroom!!</p>
      <h2>Sign up</h2>
      <Signupform @signup='enterchart'/>
      <p>Already have Account <span @click="showlogin = false">Log in</span> Instead</p>
    </div>
    <div v-else>
      <h2>Log in</h2>
      <Login @login="enterchart"/>
      <p>No Account yet? <span @click="showlogin = true">Sign up</span> Instead</p>
    </div>
  </div>
</template>

<script>
import Signupform from '../components/Signupform.vue'
import Login from '../components/Login.vue'
import { ref } from 'vue'
import {useRouter} from 'vue-router'
export default {
  components : {Signupform, Login},
  setup(){
    const showlogin = ref(true)
    const router = useRouter()
    const enterchart = () =>{
      router.push({name:'Chartroom'})

    }

    return {showlogin, enterchart}
  }
}
</script>
<style>
.welcome{
    text-align: center;
    margin: 20px 0;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input{
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: grey;
  margin: 10px auto;
  cursor: pointer;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button{
  margin: 20px auto;
}
</style>  