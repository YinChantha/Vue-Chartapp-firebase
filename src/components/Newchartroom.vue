<template>
  <form>
      <textarea placeholder="Type message and hit enter to send ..." v-model="message" @keypress.enter.prevent="handlesubmit"></textarea>
      <div class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composable/getUser'
import Usecollection from '../composable/Usecollection'
import {timestamp} from '../firebase/config'
export default {
    setup(){
        const {user } = getUser()
        const {addDoc, error} = Usecollection('messages')
        const message = ref('')
        const handlesubmit = async() => {
            const chart = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }
            await addDoc(chart)
            if(!error.value){
                message.value=''
            }
        }
        return {message, handlesubmit, error}
    }
}
</script>
<style scoped>
form{
    margin: 10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0px;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}

</style>