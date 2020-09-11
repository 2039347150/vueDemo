import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Blog from '../views/Blog.vue'

// vue中安装路由插件
Vue.use(VueRouter)

// export default new Router({
//     routes: [{
//             path: '/',
//             name: 'HelloWorld',
//             component: HelloWorld
//         }, {
//             path: '/Home',
//             name: 'Home',
//             component: Home
//         },
//         {
//             path: '/User/:id/:age',
//             name: 'User',
//             component: User,
//         },
//         {
//             path: '/Blog',
//             name: 'Blog',
//             component: Blog,
//         }
//     ]
// })

// 修复push重复调用报错的问题
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    originPush.call(this, location).catch((err) => err);
}

var routes = [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/User/:id/:age',
        name: 'User2',
        component: User,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    }
]

// 创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes
})

// 导出路由对象
export default router;