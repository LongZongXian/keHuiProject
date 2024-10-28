import { createRouter, createWebHistory } from "vue-router";

import layoutVue from '@/views/layout.vue'
import homepageVue from '@/views/subViews/homepage.vue'
import resourceVue from '@/views/subViews/resource.vue'
import activeVue from '@/views/subViews/active.vue'
import informationVue from "@/views/subViews/information.vue";
import searchVue from "@/views/subViews/search.vue";
import transactionVue from "@/views/subViews/transaction.vue";
import loginVue from "@/views/login.vue";
import workbenchVue from "@/views/subViews/workbench.vue";

//定义路由关系
const routes = [


    {
        path: '/', component: layoutVue,
        //重定向
        redirect: '/homepage',

        //子路由
        children: [
            { path: '/homepage', component: homepageVue },
            { path: '/resource', component: resourceVue },
            { path: '/active', component: activeVue },
            { path: '/information', component: informationVue },
            { path: '/search', component: searchVue },
            { path: '/transaction', component: transactionVue },
            { path: '/login', component: loginVue },
            { path: '/workbench', component: workbenchVue }

        ]
    },
]


// const routes = [


//     {
//         path: '/', component: layoutVue,
//         //重定向
//         redirect: '/Homepage',

//         //子路由
//         children: [
//             {path:'/login' ,component:loginVue},
//             { path: '/Project/Overview', force: true,component: ExploreProjectsVue },
//             { path: '/homepage', component: homePageVue },
//             { path: '/Project/Detail', component: detailProjectVue },
//         ]
//     }
// ]

//createRouter
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//导出路由
export default router
