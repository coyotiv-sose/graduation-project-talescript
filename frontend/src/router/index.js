import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipesView from '../views/RecipesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calculator',
      name: 'calculator',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CalculatorView.vue')
    },
    {
      path: '/recipes',
      name: 'recipes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RecipesView
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/recipes/:id',
      name: 'recipe',

      component: () => import('../views/RecipeView.vue')
    },
    {
      path: '/events',
      name: 'events',

      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/events/:id',
      name: 'event',

      component: () => import('../views/EventView.vue')
    }
  ]
})

export default router
