import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/privacy',
    component: () => import('@/views/privacy/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  {
    path: '/',
    component: () => import('@/views/index'),
    hidden: true
  },
  {
    path: '/admin/project',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/admin/project/index'),
        name: '',
        meta: { title: 'Project', icon: 'dashboard', affix: true }
      },
      {
        path: 'update/:id',
        component: () => import('@/views/admin/project/editproject'),
        hidden: true,
        name: 'EditProject',
        meta: {
          title: 'edit',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/admin/alarm',
    component: Layout,
    redirect: '',
    alwaysShow: true, // will always show the root menu
    name: '',
    meta: {
      title: '警報管理',
      icon: 'dashboard',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/admin/alarm/list'),
        name: '',
        meta: {
          title: 'List',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'history',
        component: () => import('@/views/admin/alarm/history'),
        name: '',
        meta: {
          title: 'History',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'setting',
        component: () => import('@/views/admin/alarm/setting'),
        name: '',
        meta: {
          title: 'Setting',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  nestedRouter,
  {
    path: '/admin/sourcemanagement',
    component: Layout,
    redirect: '',
    alwaysShow: true, // will always show the root menu
    name: '',
    meta: {
      title: '資源庫管理',
      icon: 'nested',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: '',
        component: () => import('@/views/admin/image/index'),
        name: '',
        meta: { title: 'Upload Picture', affix: true }
      }
    ]
  },
  {
    path: '/admin/equipmanagement',
    component: Layout,
    redirect: '',
    alwaysShow: true, // will always show the root menu
    name: '',
    meta: {
      title: '設備管理',
      icon: 'nested',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'equiplist',
        component: () => import('@/views/admin/equiplist/index'),
        name: '',
        meta: { title: '設備清單', affix: true }
      },
      {
        path: 'equipviewmore',
        component: () => import('@/views/admin/equiplist/viewmore'),
        hidden: true,
        name: 'EquipListViewMore',
        meta: {
          title: 'edit',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'equipupdate',
        component: () => import('@/views/admin/equiplist/editequip'),
        hidden: true,
        name: 'EditEquip',
        meta: {
          title: 'edit',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'repair',
        component: () => import('@/views/admin/repair/index'),
        name: '',
        meta: { title: '維修保養紀錄', affix: true }
      },
      {
        path: 'repairviewmore',
        component: () => import('@/views/admin/repair/viewmore'),
        hidden: true,
        name: 'RepairViewMore',
        meta: {
          title: 'edit',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'notification',
        component: () => import('@/views/admin/notification/index'),
        name: '',
        meta: { title: '通知', affix: true }
      },
      {
        path: 'notificationviewmore',
        component: () => import('@/views/admin/notification/viewmore'),
        hidden: true,
        name: 'RepairViewMore',
        meta: {
          title: 'edit',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'reporttable',
        component: () => import('@/views/admin/reporttable/export-excel'),
        name: 'ExportExcel',
        meta: { title: '報表', affix: true }
      }
    ]
  },
  {
    path: '/admin/accounts',
    component: Layout,
    redirect: '/admin/accounts/settings',
    alwaysShow: true, // will always show the root menu
    name: '',
    meta: {
      title: '帳戶管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/admin/accounts/create'),
        name: '',
        meta: {
          title: '新增帳戶',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'update',
        component: () => import('@/views/admin/accounts/update'),
        name: '',
        meta: {
          title: '修改帳戶',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'update/:id',
        component: () => import('@/views/admin/accounts/update/edituser'),
        hidden: true,
        name: 'EditUser',
        meta: {
          title: 'edit',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'query',
        component: () => import('@/views/admin/accounts/query'),
        name: '',
        meta: {
          title: '查詢帳戶'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'delete',
        component: () => import('@/views/admin/accounts/delete'),
        name: '',
        meta: {
          title: '刪除帳戶',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/admin/setting',
    component: Layout,
    redirect: '',
    alwaysShow: true, // will always show the root menu
    name: '',
    meta: {
      title: '設定',
      icon: 'dashboard',
      roles: ['admin', 'editor'] // you can set roles in root nav
    }
  }
  // nestedRouter2,
  // {
  //   path: '/admin/colddata',
  //   component: Layout,
  //   redirect: '',
  //   alwaysShow: true, // will always show the root menu
  //   name: '',
  //   meta: {
  //     title: 'Colddata',
  //     icon: 'dashboard',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/admin/colddata/create'),
  //       name: '',
  //       meta: {
  //         title: 'Create ColdData',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'update',
  //       component: () => import('@/views/admin/colddata/update'),
  //       name: '',
  //       meta: {
  //         title: 'Update ColdData',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'update/:id',
  //       component: () => import('@/views/admin/colddata/update/editcolddata'),
  //       hidden: true,
  //       name: 'EditColddata',
  //       meta: {
  //         title: 'edit',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'query',
  //       component: () => import('@/views/admin/colddata/query'),
  //       name: '',
  //       meta: {
  //         title: 'Query ColdData'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'delete',
  //       component: () => import('@/views/admin/colddata/delete'),
  //       name: '',
  //       meta: {
  //         title: 'Delete ColdData',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/admin/hotdata',
  //   component: Layout,
  //   redirect: '',
  //   alwaysShow: true, // will always show the root menu
  //   name: '',
  //   meta: {
  //     title: 'Hotdata',
  //     icon: 'dashboard',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/admin/hotdata/create'),
  //       name: '',
  //       meta: {
  //         title: 'Create HotData',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'update',
  //       component: () => import('@/views/admin/hotdata/update'),
  //       name: '',
  //       meta: {
  //         title: 'Update HotData',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'update/:id',
  //       component: () => import('@/views/admin/hotdata/update/edithotdata'),
  //       hidden: true,
  //       name: 'EditHotdata',
  //       meta: {
  //         title: 'edit',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'query',
  //       component: () => import('@/views/admin/hotdata/query'),
  //       name: '',
  //       meta: {
  //         title: 'Query HotData'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'delete',
  //       component: () => import('@/views/admin/hotdata/delete'),
  //       name: '',
  //       meta: {
  //         title: 'Delete HotData',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/admin/schedule',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/admin/schedule/index'),
  //       name: '',
  //       meta: { title: 'Schedule', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/admin/uploadimage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/admin/image/index'),
  //       name: '',
  //       meta: { title: 'Upload Image', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // }
  // {
  //   path: '/admin/report',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/admin/report/index'),
  //       name: '',
  //       meta: { title: 'Report', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'Documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'Guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/admin/equiplist',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/admin/equiplist/index'),
  //       name: '',
  //       meta: { title: '設備清單', icon: 'dashboard', affix: true }
  //     },
  //     {
  //       path: 'viewmore',
  //       component: () => import('@/views/admin/equiplist/viewmore'),
  //       hidden: true,
  //       name: 'EquipListViewMore',
  //       meta: {
  //         title: 'edit',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'update',
  //       component: () => import('@/views/admin/equiplist/editequip'),
  //       hidden: true,
  //       name: 'EditEquip',
  //       meta: {
  //         title: 'edit',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/admin/repair',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/admin/repair/index'),
  //       name: '',
  //       meta: { title: '維修保養紀錄', icon: 'dashboard', affix: true }
  //     },
  //     {
  //       path: 'viewmore',
  //       component: () => import('@/views/admin/repair/viewmore'),
  //       hidden: true,
  //       name: 'RepairViewMore',
  //       meta: {
  //         title: 'edit',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/admin/notification',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/admin/notification/index'),
  //       name: '',
  //       meta: { title: '通知', icon: 'dashboard', affix: true }
  //     },
  //     {
  //       path: 'viewmore',
  //       component: () => import('@/views/admin/notification/viewmore'),
  //       hidden: true,
  //       name: 'RepairViewMore',
  //       meta: {
  //         title: 'edit',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/admin/rporttable',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/admin/reporttable/export-excel'),
  //       name: 'ExportExcel',
  //       meta: { title: '報表', icon: 'dashboard', affix: true }
  //     }
  //     // {
  //     //   path: '',
  //     //   component: () => import('@/views/admin/reporttable/index'),
  //     //   name: '',
  //     //   meta: { title: '報表', icon: 'dashboard', affix: true }
  //     // },
  //     // {
  //     //   path: 'viewmore',
  //     //   component: () => import('@/views/admin/reporttable/viewmore'),
  //     //   hidden: true,
  //     //   name: 'RepairViewMore',
  //     //   meta: {
  //     //     title: 'edit',
  //     //     roles: ['admin'] // or you can only set roles in sub nav
  //     //   }
  //     // }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'Permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'Page Permission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'Directive Permission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'Role Permission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },

  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'Icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  /** when your routing map is too long, you can split it into small modules **/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'Example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'Create Article', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'Article List', icon: 'list' }
  //     }
  //   ]
  // },

  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'Tab', icon: 'tab' }
  //     }
  //   ]
  // },

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: '401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: '404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/error-log/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'Error Log', icon: 'bug' }
  //     }
  //   ]
  // },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'Excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/export-excel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'Export Excel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/select-excel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'Export Selected' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/merge-header'),
  //       name: 'MergeHeader',
  //       meta: { title: 'Merge Header' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/upload-excel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'Upload Excel' }
  //     }
  //   ]
  // },

  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   name: 'Zip',
  //   meta: { title: 'Zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'Export Zip' }
  //     }
  //   ]
  // },

  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'PDF', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'Theme', icon: 'theme' }
  //     }
  //   ]
  // },

  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'Clipboard', icon: 'clipboard' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
