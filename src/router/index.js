import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Main/search')
    },
    {
      path: '/searchDetail',
      name: 'searchDetail',
      component: () => import('@/views/Main/searchDetail')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('@/views/Find')
    },
    {
      path: '/pubArticle',
      name: 'pubArticle',
      component: () => import('@/views/Publish/pubArticle')
    },
    {
      path: '/pubQuestion',
      name: 'pubQuestion',
      component: () => import('@/views/Publish/pubQuestion')
    },
    {
      path: '/questionPublishSuccess',
      name: 'questionPublishSuccess',
      component: () => import('@/views/Publish/questionPublishSuccess')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/Message')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/Mine')
    },
    {
      path: '/myArticles',
      name: 'myArticles',
      component: () => import('@/views/Mine/myArticles')
    },
    {
      path: '/myAttents',
      name: 'myAttents',
      component: () => import('@/views/Mine/myAttents')
    },
    {
      path: '/myCollections',
      name: 'myCollections',
      component: () => import('@/views/Mine/myCollections')
    },
    {
      path: '/myFanses',
      name: 'myFanses',
      component: () => import('@/views/Mine/myFanses')
    },
    {
      path: '/myProfile',
      name: 'myProfile',
      component: () => import('@/views/Mine/myProfile')
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: () => import('@/views/Detail/articleDetail')
    },
    {
      path: '/chatDetail',
      name: 'chatDetail',
      component: () => import('@/views/Detail/chatDetail')
    },
    {
      path: '/questionDetail',
      name: 'questionDetail',
      component: () => import('@/views/Detail/questionDetail')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register')
    }
  ]
})
