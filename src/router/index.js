import Vue from 'vue'
import Router from 'vue-router'
import Tap from 'components/tap'
import Finder from 'components/finder/finder'
import MusicHall from 'components/music-hall/music-hall'
import Mine from 'components/mine/mine'
import Login from 'components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home/mine'},
    {
      path: '/home',
      name: 'Tap',
      component: Tap,
      children: [
        {
          path: '/home/finder',
          name: 'Finder',
          component: Finder
        },
        {
          path: '/home/mine',
          name: 'Mine',
          component: Mine
        },
        {
          path: '/home/music-hall',
          name: 'MusicHall',
          component: MusicHall
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
