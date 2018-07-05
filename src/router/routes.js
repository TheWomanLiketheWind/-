//  首页
const container = r => require.ensure([], () => r(require('@/layout/container')), 'container')
const home = r => require.ensure([], () => r(require('@/page/home/index')), 'home')
const login = r => require.ensure([], () => r(require('@/page/home/login')), 'login')

export default [
  {
    path: '/',
    redirect: '/home',
    component: container,
    children: [{
      path: '',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: home
    },
    {
      path: '/home/login',
      name: 'login',
      meta: {
        title: '首页'
      },
      component: login
    },
  ]}
]
