import Vue from 'vue'
import Router from 'vue-router'
import Latest from '@/components/Latest'
import Tech from '@/components/Tech'
import Entertainment from '@/components/Entertainment'
import Bussiness from '@/components/Bussiness'
import Health from '@/components/Health'
import Science from '@/components/Science'
import International from '@/components/International'
import Sport from '@/components/Sport'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Latest',
      component: Latest
    },
    {
      path: '/teknologi',
      name: 'Tech',
      component: Tech
    },
    {
      path: '/hiburan',
      name: 'Entertainment',
      component: Entertainment
    },
    {
      path: '/bisnis',
      name: 'Bussiness',
      component: Bussiness
    },
    {
      path: '/kesehatan',
      name: 'Health',
      component: Health
    },
    {
      path: '/sains',
      name: 'Science',
      component: Science
    },
    {
      path: '/olahraga',
      name: 'Sport',
      component: Sport
    },
    {
      path: '/cari',
      name: 'Search',
      component: Search
    },
    {
      path: '/internasional',
      name: 'International',
      component: International
    },
  ]
})
