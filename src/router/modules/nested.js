/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/pointcontrol',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: 'Nested',
  meta: {
    title: '點位控制',
    icon: 'nested'
  },
  children: [
    {
      path: 'colddata',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: 'Colddata', icon: 'dashboard' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'create',
          component: () => import('@/views/admin/colddata/create'),
          name: '',
          meta: {
            title: 'Create ColdData',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        },
        {
          path: 'update',
          component: () => import('@/views/admin/colddata/update'),
          name: '',
          meta: {
            title: 'Update ColdData',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        },
        {
          path: 'update/:id',
          component: () => import('@/views/admin/colddata/update/editcolddata'),
          hidden: true,
          name: 'EditColddata',
          meta: {
            title: 'edit',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        },
        {
          path: 'query',
          component: () => import('@/views/admin/colddata/query'),
          name: '',
          meta: {
            title: 'Query ColdData'
            // if do not set roles, means: this page does not require permission
          }
        },
        {
          path: 'delete',
          component: () => import('@/views/admin/colddata/delete'),
          name: '',
          meta: {
            title: 'Delete ColdData',
            roles: ['admin']
          }
        }
      ]
    },
    {
      path: 'hotdata',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: 'Hotdata', icon: 'dashboard' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'create',
          component: () => import('@/views/admin/hotdata/create'),
          name: '',
          meta: {
            title: 'Create HotData',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        },
        {
          path: 'update',
          component: () => import('@/views/admin/hotdata/update'),
          name: '',
          meta: {
            title: 'Update HotData',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        },
        {
          path: 'update/:id',
          component: () => import('@/views/admin/hotdata/update/edithotdata'),
          hidden: true,
          name: 'EditHotdata',
          meta: {
            title: 'edit',
            roles: ['admin'] // or you can only set roles in sub nav
          }
        },
        {
          path: 'query',
          component: () => import('@/views/admin/hotdata/query'),
          name: '',
          meta: {
            title: 'Query HotData'
            // if do not set roles, means: this page does not require permission
          }
        },
        {
          path: 'delete',
          component: () => import('@/views/admin/hotdata/delete'),
          name: '',
          meta: {
            title: 'Delete HotData',
            roles: ['admin']
          }
        }
      ]
    },
    {
      path: 'schedule',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: 'Schedule' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: '',
          component: () => import('@/views/admin/schedule/index'),
          name: '',
          meta: { title: 'Schedule', icon: 'dashboard', affix: true }
        }
      ]
    }
  ]
}

export default nestedRouter
