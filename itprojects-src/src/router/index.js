import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Home
  },
  {
    path: '/noteeditor/:id?',
    name: 'Редактор заметок',
    component: () => import('@/views/NoteEditor.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
