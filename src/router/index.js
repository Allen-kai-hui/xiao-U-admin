import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      dispatch: '/menu'
    },
    {
      path: "/home",
      component: () => import("@/pages/Home/Home")
    },
    {
      path: "/menu",
      component: () => import("@/pages/Menu/Menu")
    },
    {
      path: "/menu/add",
      component: () => import("@/pages/Menu/Menuadd")
    },
    {
      path: "/menu/alter",
      component: () => import("@/pages/Menu/Menuadd")
    },
    {
      path: "/role",
      component: () => import("@/pages/Role/Role")
    },
    {
      path: "/role/add",
      component: () => import("@/pages/Role/Roleadd")
    },
    {
      path: "/role/edit",
      component: () => import("@/pages/Role/Roleadd")
    },
    {
      path: "/user",
      component: () => import("@/pages/User/User")
  },
  {
      path: "/user/add",
      component: () => import("@/pages/User/Useradd")
  },
  {
      path: "/user/edit",
      component: () => import("@/pages/User/Useradd")
  },
  ]
})
