import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  // 轮播图
  {
    path: '/swiper',
    component: Layout,
    redirect: '/swiper/swiper1',
    name: 'swiper',
    meta: { title: '轮播图', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'swiper1',
        name: 'swiper1',
        component: () => import('@/views/swiper/swiper1'),
        meta: { title: '轮播图-1', icon: 'table' }
      },
      {
        path: 'swiper2',
        name: 'swiper2',
        component: () => import('@/views/swiper/swiper2/'),
        meta: { title: '轮播图-2', icon: 'tree' }
      },
      {
        path: 'swiper3',
        name: 'swiper3',
        component: () => import('@/views/swiper/swiper3/'),
        meta: { title: '轮播图-3', icon: 'tree' }
      },
      {
        path: 'swiper4',
        name: 'swiper4',
        component: () => import('@/views/swiper/swiper4/'),
        meta: { title: '轮播图-4', icon: 'tree' }
      },
      {
        path: 'swiper5',
        name: 'swiper5',
        component: () => import('@/views/swiper/swiper5/'),
        meta: { title: '轮播图-5', icon: 'tree' }
      },
      {
        path: 'swiper6',
        name: 'swiper6',
        component: () => import('@/views/swiper/swiper6/'),
        meta: { title: '轮播图-6', icon: 'tree' }
      },
      {
        path: 'swiper7',
        name: 'swiper7',
        component: () => import('@/views/swiper/swiper7/'),
        meta: { title: '轮播图-7', icon: 'tree' }
      },
      {
        path: 'swiper8',
        name: 'swiper8',
        component: () => import('@/views/swiper/swiper8/'),
        meta: { title: '轮播图-8', icon: 'tree' }
      },
      {
        path: 'swiper9',
        name: 'swiper9',
        component: () => import('@/views/swiper/swiper9/'),
        meta: { title: '轮播图-9', icon: 'tree' }
      },
      {
        path: 'swiper10',
        name: 'swiper10',
        component: () => import('@/views/swiper/swiper10/'),
        meta: { title: '轮播图-10', icon: 'tree' }
      },
      {
        path: 'swiper11',
        name: 'swiper11',
        component: () => import('@/views/swiper/swiper11'),
        meta: { title: '轮播图-11', icon: 'tree' }
      },
      {
        path: 'swiper12',
        name: 'swiper12',
        component: () => import('@/views/swiper/swiper12'),
        meta: { title: '轮播图-12', icon: 'tree' }
      }
    ]
  },
  // 视差特效
  {
    path: '/parallaxEffects',
    component: Layout,
    redirect: '/parallaxEffects/effect1',
    name: 'parallaxEffects',
    meta: { title: '视差特效', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'effect1',
        name: 'effect1',
        component: () => import('@/views/parallaxEffects/effect1'),
        meta: { title: '视差特效-1', icon: 'table' }
      },
      {
        path: 'effect2',
        name: 'effect2',
        component: () => import('@/views/parallaxEffects/effect2/'),
        meta: { title: '视差特效-2', icon: 'tree' }
      }
      // {
      //   path: "effect3",
      //   name: "effect3",
      //   component: () => import("@/views/parallaxEffects/effect3/"),
      //   meta: { title: "effect3", icon: "tree" }
      // },
      // {
      //   path: "effect4",
      //   name: "effect4",
      //   component: () => import("@/views/parallaxEffects/effect4/"),
      //   meta: { title: "effect4", icon: "tree" }
      // },
      // {
      //   path: "effect5",
      //   name: "effect5",
      //   component: () => import("@/views/parallaxEffects/effect5/"),
      //   meta: { title: "effect5", icon: "tree" }
      // }
    ]
  },
  // 时间线
  {
    path: '/timeLine',
    component: Layout,
    redirect: '/timeLine/timeLine-1',
    name: 'timeLine',
    meta: { title: '时间线', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'timeLine-1',
        name: 'timeLine-1',
        component: () => import('@/views/timeLine/timeLine-1'),
        meta: { title: '时间线-1', icon: 'table' }
      },
      {
        path: 'timeLine-2',
        name: 'timeLine-2',
        component: () => import('@/views/timeLine/timeLine-2/'),
        meta: { title: '时间线-2', icon: 'tree' }
      },
      {
        path: 'timeLine-3',
        name: 'timeLine-3',
        component: () => import('@/views/timeLine/timeLine-3/'),
        meta: { title: '时间线-3', icon: 'tree' }
      },
      {
        path: 'timeLine-4',
        name: 'timeLine-4',
        component: () => import('@/views/timeLine/timeLine-4/'),
        meta: { title: '时间线-4', icon: 'tree' }
      },
      {
        path: 'timeLine-5',
        name: 'timeLine-5',
        component: () => import('@/views/timeLine/timeLine-5/'),
        meta: { title: '时间线-5', icon: 'tree' }
      },
      {
        path: 'timeLine-6',
        name: 'timeLine-6',
        component: () => import('@/views/timeLine/timeLine-6/'),
        meta: { title: '时间线-6', icon: 'tree' }
      }
    ]
  },
  // hover
  {
    path: '/hover',
    component: Layout,
    redirect: '/hover/ButtonHover',
    meta: {
      title: 'Hover',
      icon: 'nested'
    },
    children: [
      {
        path: 'card',
        component: () => import('@/views/hover/card/index'), // Parent router-view
        redirect: '/hover/card/card-1',
        name: 'card',
        meta: { title: '卡片Hover' },
        children: [
          {
            path: 'card-1',
            component: () => import('@/views/hover/card/card-1'),
            name: 'Card-1',
            meta: { title: '卡片Hover-1' }
          },
          {
            path: 'card-2',
            component: () => import('@/views/hover/card/card-2'),
            name: 'Card-2',
            meta: { title: '卡片Hover-2' }
          },
          {
            path: 'card-3',
            component: () => import('@/views/hover/card/card-3'),
            name: 'Card-3',
            meta: { title: '卡片Hover-3' }
          },
          {
            path: 'card-4',
            component: () => import('@/views/hover/card/card-4'),
            name: 'Card-4',
            meta: { title: '卡片Hover-4' }
          },
          {
            path: 'card-5',
            component: () => import('@/views/hover/card/card-5'),
            name: 'Card-5',
            meta: { title: '卡片Hover-5' }
          },
          {
            path: 'card-6',
            component: () => import('@/views/hover/card/card-6'),
            name: 'Card-6',
            meta: { title: '卡片Hover-6' }
          },
          {
            path: 'card-8',
            component: () => import('@/views/hover/card/card-8'),
            name: 'Card-8',
            meta: { title: '卡片Hover-8' }
          }
        ]
      },
      {
        path: 'ButtonHover',
        component: () => import('@/views/hover/ButtonHover/index'),
        name: 'ButtonHover',
        meta: { title: 'ButtonHover' }
      }
      // {
      //   path: "Txt",
      //   component: () => import("@/views/hover/Txt/index"),
      //   redirect: "/hover/Txt/Txt-1",
      //   name: "Txt",
      //   meta: { title: "Txt" },
      //   children: [
      //     {
      //       path: "Txt-1",
      //       component: () => import("@/views/hover/Txt/Txt-1"),
      //       name: "Txt-1",
      //       meta: { title: "Txt-1" }
      //     }
      //   ]
      // }
    ]
  },
  // input
  {
    path: '/input',
    component: Layout,
    redirect: '/input/BorderEffects',
    name: 'InputEffects',
    children: [
      {
        path: 'InputEffects',
        name: 'InputEffects',
        component: () => import('@/views/input/'),
        meta: { title: '输入框特效', icon: 'table' }
      }
    ]
  },
  // 手风琴
  {
    path: '/accordion',
    component: Layout,
    redirect: '/accordion/accordion-1',
    name: 'accordion',
    meta: { title: '手风琴', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'accordion-1',
        name: 'accordion-1',
        component: () => import('@/views/accordion/accordion-1'),
        meta: { title: '手风琴-1', icon: 'table' }
      },
      {
        path: 'accordion-2',
        name: 'accordion-2',
        component: () => import('@/views/accordion/accordion-2'),
        meta: { title: '手风琴-2', icon: 'tree' }
      }
      // {
      //   path: "decorate-1",
      //   name: "decorate-1",
      //   component: () => import("@/views/decorate/decorate-1/"),
      //   meta: { title: "decorate-1", icon: "tree" }
      // },
      // {
      //   path: "decorate-1",
      //   name: "decorate-1",
      //   component: () => import("@/views/decorate/decorate-1/"),
      //   meta: { title: "decorate-1", icon: "tree" }
      // },
      // {
      //   path: "decorate-1",
      //   name: "decorate-1",
      //   component: () => import("@/views/decorate/decorate-1/"),
      //   meta: { title: "decorate-1", icon: "tree" }
      // }
    ]
  },
  // css3样式集
  {
    path: '/css3StyleSet',
    component: Layout,
    redirect: '/css3StyleSet/cornerCut',
    name: 'css3StyleSet',
    meta: { title: 'css3小样式集合', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'cornerCut',
        name: 'cornerCut',
        component: () => import('@/views/css3StyleSet/cornerCut'),
        meta: { title: '切角', icon: 'table' }
      },
      {
        path: 'line',
        name: 'line',
        component: () => import('@/views/css3StyleSet/line'),
        meta: { title: '线', icon: 'tree' }
      },
      {
        path: 'scrollBar',
        name: 'scrollBar',
        component: () => import('@/views/css3StyleSet/scrollBar'),
        meta: { title: '滚动条', icon: 'tree' }
      },
      {
        path: 'openSty',
        name: 'openSty',
        component: () => import('@/views/css3StyleSet/openSty'),
        meta: { title: '开关', icon: 'tree' }
      }
      // {
      //   path: 'loader-5',
      //   name: 'loader-5',
      //   component: () => import('@/views/loaders/loader-5'),
      //   meta: { title: 'Loading-5', icon: 'tree' }
      // },
      // {
      //   path: 'loader-6',
      //   name: 'loader-6',
      //   component: () => import('@/views/loaders/loader-6'),
      //   meta: { title: 'Loading-6', icon: 'tree' }
      // },
      // {
      //   path: 'loader-7',
      //   name: 'loader-7',
      //   component: () => import('@/views/loaders/loader-7'),
      //   meta: { title: 'Loading-7', icon: 'tree' }
      // },
      // {
      //   path: 'loader-8',
      //   name: 'loader-8',
      //   component: () => import('@/views/loaders/loader-8'),
      //   meta: { title: 'Loading-8', icon: 'tree' }
      // },
      // {
      //   path: 'loader-9',
      //   name: 'loader-9',
      //   component: () => import('@/views/loaders/loader-9'),
      //   meta: { title: 'Loading-9', icon: 'tree' }
      // }
      // {
      //   path: "decorate-1",
      //   name: "decorate-1",
      //   component: () => import("@/views/decorate/decorate-1/"),
      //   meta: { title: "decorate-1", icon: "tree" }
      // },
      // {
      //   path: "decorate-1",
      //   name: "decorate-1",
      //   component: () => import("@/views/decorate/decorate-1/"),
      //   meta: { title: "decorate-1", icon: "tree" }
      // },
      // {
      //   path: "decorate-1",
      //   name: "decorate-1",
      //   component: () => import("@/views/decorate/decorate-1/"),
      //   meta: { title: "decorate-1", icon: "tree" }
      // }
    ]
  },
  // loading
  {
    path: '/loaders',
    component: Layout,
    redirect: '/loaders/loader-1',
    name: 'loaders',
    meta: { title: 'Loading', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'loader-1',
        name: 'loader-1',
        component: () => import('@/views/loaders/loader-1'),
        meta: { title: 'Loading-1', icon: 'table' }
      },
      {
        path: 'loader-2',
        name: 'loader-2',
        component: () => import('@/views/loaders/loader-2'),
        meta: { title: 'Loading-2', icon: 'tree' }
      },
      {
        path: 'loader-3',
        name: 'loader-3',
        component: () => import('@/views/loaders/loader-3'),
        meta: { title: 'Loading-3', icon: 'tree' }
      },
      {
        path: 'loader-4',
        name: 'loader-4',
        component: () => import('@/views/loaders/loader-4'),
        meta: { title: 'Loading-4', icon: 'tree' }
      },
      {
        path: 'loader-5',
        name: 'loader-5',
        component: () => import('@/views/loaders/loader-5'),
        meta: { title: 'Loading-5', icon: 'tree' }
      },
      {
        path: 'loader-6',
        name: 'loader-6',
        component: () => import('@/views/loaders/loader-6'),
        meta: { title: 'Loading-6', icon: 'tree' }
      },
      {
        path: 'loader-7',
        name: 'loader-7',
        component: () => import('@/views/loaders/loader-7'),
        meta: { title: 'Loading-7', icon: 'tree' }
      },
      {
        path: 'loader-8',
        name: 'loader-8',
        component: () => import('@/views/loaders/loader-8'),
        meta: { title: 'Loading-8', icon: 'tree' }
      },
      {
        path: 'loader-9',
        name: 'loader-9',
        component: () => import('@/views/loaders/loader-9'),
        meta: { title: 'Loading-9', icon: 'tree' }
      },
      {
        path: 'loader-10',
        name: 'loader-10',
        component: () => import('@/views/loaders/loader-10'),
        meta: { title: 'Loading-10', icon: 'tree' }
      }
    ]
  },
  // 动效装饰
  {
    path: '/decorate',
    component: Layout,
    redirect: '/decorate/decorate-1',
    name: 'decorate',
    meta: { title: '动效装饰', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'decorate-1',
        name: 'decorate-1',
        component: () => import('@/views/decorate/decorate-1'),
        meta: { title: '动态琴键', icon: 'table' }
      },
      {
        path: 'decorate-2',
        name: 'decorate-2',
        component: () => import('@/views/decorate/decorate-2'),
        meta: { title: '流体交互', icon: 'tree' }
      },
      {
        path: 'decorate-3',
        name: 'decorate-3',
        component: () => import('@/views/decorate/decorate-3'),
        meta: { title: '动态水波纹', icon: 'tree' }
      }
      // {
      //   path: "decorate-1",
      //   name: "decorate-1",
      //   component: () => import("@/views/decorate/decorate-1"),
      //   meta: { title: "decorate-1", icon: "tree" }
      // },
      // {
      //   path: "decorate-1",
      //   name: "decorate-1",
      //   component: () => import("@/views/decorate/decorate-1/"),
      //   meta: { title: "decorate-1", icon: "tree" }
      // }
    ]
  },
  // 标签页
  {
    path: '/tabPage',
    component: Layout,
    redirect: '/tabPage/tabPage-1',
    name: 'tabPage',
    meta: { title: '标签页', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'tabPage-1',
        name: 'tabPage-1',
        component: () => import('@/views/tabPage/tabPage-1'),
        meta: { title: '标签页-1', icon: 'table' }
      }
      // {
      //   path: 'tabPage-2',
      //   name: 'tabPage-2',
      //   component: () => import('@/views/tabPage/tabPage-2'),
      //   meta: { title: '标签页-2', icon: 'tree' }
      // }
      // {
      //   path: "tabPage-1",
      //   name: "tabPage-1",
      //   component: () => import("@/views/tabPage/tabPage-1/"),
      //   meta: { title: "标签页-1", icon: "tree" }
      // },
      // {
      //   path: "tabPage-1",
      //   name: "tabPage-1",
      //   component: () => import("@/views/tabPage/tabPage-1/"),
      //   meta: { title: "标签页-1", icon: "tree" }
      // },
      // {
      //   path: "tabPage-1",
      //   name: "tabPage-1",
      //   component: () => import("@/views/tabPage/tabPage-1/"),
      //   meta: { title: "标签页-1", icon: "tree" }
      // }
    ]
  },
  // 导航
  {
    path: '/Navigation',
    component: Layout,
    redirect: '/navigation/navigation-1',
    name: 'Navigation',
    meta: { title: '导航', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'navigation-1',
        name: 'navigation-1',
        component: () => import('@/views/navigation/navigation-1'),
        meta: { title: '导航-1', icon: 'table' }
      },
      {
        path: 'navigation-2',
        name: 'navigation-2',
        component: () => import('@/views/navigation/navigation-2'),
        meta: { title: '导航-2', icon: 'tree' }
      },
      {
        path: 'navigation-3',
        name: 'navigation-3',
        component: () => import('@/views/navigation/navigation-3/'),
        meta: { title: '导航-3', icon: 'tree' }
      }
      // {
      //   path: "navigation-1",
      //   name: "navigation-1",
      //   component: () => import("@/views/navigation/navigation-1/"),
      //   meta: { title: "navigation-1", icon: "tree" }
      // },
      // {
      //   path: "navigation-1",
      //   name: "navigation-1",
      //   component: () => import("@/views/navigation/navigation-1/"),
      //   meta: { title: "navigation-1", icon: "tree" }
      // }
    ]
  },
  // 文本特效
  {
    path: '/txt',
    component: Layout,
    redirect: '/txt/txt-1',
    name: 'txt',
    meta: { title: '文字特效', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'txt-1',
        name: 'txt-1',
        component: () => import('@/views/txt/txt-1'),
        meta: { title: '文字特效', icon: 'table' }
      }
      // {
      //   path: "txt-2",
      //   name: "txt-2",
      //   component: () => import("@/views/txt/txt-2"),
      //   meta: { title: "Txt-2", icon: "tree" }
      // }
      // {
      //   path: "navigation-1",
      //   name: "navigation-1",
      //   component: () => import("@/views/navigation/navigation-1/"),
      //   meta: { title: "navigation-1", icon: "tree" }
      // },
      // {
      //   path: "navigation-1",
      //   name: "navigation-1",
      //   component: () => import("@/views/navigation/navigation-1/"),
      //   meta: { title: "navigation-1", icon: "tree" }
      // },
      // {
      //   path: "navigation-1",
      //   name: "navigation-1",
      //   component: () => import("@/views/navigation/navigation-1/"),
      //   meta: { title: "navigation-1", icon: "tree" }
      // }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com',
        meta: { title: '外链', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
