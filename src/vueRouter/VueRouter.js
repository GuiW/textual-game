import Vue from 'vue'
import VueRouter from 'vue-router'

// Main view
import map from '@/components/view/mapping'
import journal from '@/components/view/journal'
import game from '@/components/view/game'
import inventory from '@/components/view/inventory'

// Children of game
import ctaPanel from '@/components/molecule/cta-panel'
import actionsPanel from '@/components/molecule/actions-panel'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/game',
      component: game,
      children: [
        {
          path: '',
          name: 'root',
          component: ctaPanel
        },
        {
          path: 'actions',
          name: 'actions',
          component: actionsPanel
        }
      ]
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/journal',
      name: 'journal',
      component: journal
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: inventory
    },
    {
      path: '*',
      redirect: '/game'
    }
  ]
})
