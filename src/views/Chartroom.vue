<template>
  <div class="container">
      <Navbar />
      <chartwindow />
      <Newchartroom />
  </div>
</template>

<script>
import chartwindow from '../components/chartwindow.vue'
import Newchartroom from '../components/Newchartroom.vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composable/getUser'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
    components: {Navbar, Newchartroom, chartwindow},
    setup(){
      const {user} = getUser()
      const router = useRouter()

      watch(user, () => {
        if(!user.value){
          router.push({name: 'Welcome'})
        }
      })
    }
}
</script>

<style>
    
</style>