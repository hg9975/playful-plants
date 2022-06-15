import Vue from 'vue'
import VueRouter from 'vue-router'
import PlantView from '../views/PlantView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'plant',
    component: PlantView
  },
  {
    path: '/plant/:plant_id',
    component: () => import('../views/PlantDetail.vue')
  },
  {
    path: '/journal',
    name: 'journal',
    component: () => import('../views/JournalView.vue')
  },
  {
    path: '/journal/new',
    name: 'addNewJournal',
    component: () => import('../views/AddNewJournal.vue')
  },
  {
    path: '/journal/new/camera',
    name: 'openCamera',
    component: () => import('../views/cameraView.vue')
  },
  {
    path: '/journal/:journal_id',
    component: () => import('../views/JournalDetail.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/ProfileView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
