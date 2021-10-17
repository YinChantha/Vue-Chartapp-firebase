import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chartroom from '../views/Chartroom.vue'
import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    console.log('current user is auth guard:', user)
    if(!user){
      next({name: 'Welcome'})
    }else{
    next()
    }
}
const requireNoAuth = (to,from,next) => {
  let user = projectAuth.currentUser
    console.log('current user is auth guard:', user)
    if(user){
      next({name: 'Chartroom'})
    }else{
    next()
    }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome, 
    beforeEnter: requireNoAuth
  },
  {
    path: '/chartroom',
    name: 'Chartroom',
    component: Chartroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
