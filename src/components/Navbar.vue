<template>
  <nav v-if="user">
      <div>
          <p>Hey there {{user.displayName}}</p>
          <div class="email">Currently Log in as ... {{user.email}}</div>
      </div>
      <button @click="handleclick">Log Out</button>
  </nav>
</template>

<script>
import Uselogout from '../composable/Uselogout'
import getUser from '../composable/getUser'
export default {
    setup(){
        const {logout, error} = Uselogout()
        const {user} = getUser()
    const handleclick = async() => {
        await logout()
        if(!error.value){
            console.log('User Logged Out ')
        }
    }
    return { handleclick, user }
    }
}
</script>

<style>
nav{
        padding: 20px;
        border-bottom: 1px solid grey;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p{
        margin: 20px auto;
        font-size: 20px;
        color: rgb(24, 24, 24);
    }
    nav p.email{
        font-size: 14px;
        color: gray;
    }
</style>