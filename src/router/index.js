import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewAllBooks from '../views/ViewAllBooks.vue'
import ViewBookInformation from '../views/ViewBookInformation.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Books',
    component: ViewAllBooks
  },
  {
    path: '/book/:id',
    name: 'BookInfo',
    component: ViewBookInformation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
