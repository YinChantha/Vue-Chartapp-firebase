<template>
  <div class="chart-window">
      <div v-if="error"> {{error}} </div>
      <div v-if="document" class="messages" ref="messages">
          <div v-for="doc in formattDocument" :key="doc.id" class="single">
              <span class="created-at">{{doc.createdAt }}</span>
              <span class="name">{{doc.name}}</span>
              <span class="messages">{{doc.message}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import getcollection from '../composable/getcollection'
import {formatDistanceToNow} from 'date-fns'
import { computed, ref } from '@vue/reactivity'
import { onUpdated } from '@vue/runtime-core'
export default {
    setup(){
        const {error, document} = getcollection('messages')
        const formattDocument = computed(() => {
            if(document.value){
                return document.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc, createdAt: time}
                })
            }
        })
        // auto-scroll to bottom of messages
        const messages = ref(null)
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight 
        })
        return {error,document, formattDocument, messages}
    }
}
</script>

<style>
chart-window{
    background: rgb(130, 236, 23);
    padding: 30px 20px;
}
.single{
    margin: 20px ;
}
.created-at{
    display: block;
    color: gray;
    font-size: 12px;
    margin-bottom: 4px;
}
.name{
    font-weight: bold;
    margin-right: 6px;
}
.messages{
    max-height: 400px;
    overflow: auto;
}
</style>