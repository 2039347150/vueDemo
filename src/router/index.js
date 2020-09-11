import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import UserProfile from '../views/users/UserProfile.vue'
import UserPosts from '../views/users/UserPosts.vue'
import Blog from '../views/Blog.vue'
import Error404 from '../views/Error404.vue'

// vue中安装路由插件
Vue.use(VueRouter)

// 修复push重复调用报错的问题
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    originPush.call(this, location).catch((err) => err);
}

var routes = [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    //  {
    //     path: '/home',
    //     name: 'Home',
    //     component: Home
    // },
    // {
    //     path: '/user',
    //     name: 'User',
    //     component: User
    // },
    // {
    //     path: '/User/:id/:age',
    //     name: 'User2',
    //     component: User,
    // },
    // {
    //     path: '/blog',
    //     name: 'Blog',
    //     // 别名
    //     Alias: 'Me',
    //     component: Blog,
    // },
    // {
    //     // 重定向
    //     path: '/xx',
    //     name: 'xx',
    //     // redirect: '/home'
    //     // redirect: {name:"Home"}
    //     redirect: function() {
    //         return {
    //             name: 'edit',
    //             params: { id: 101 }
    //         }
    //     }
    // },
    // {
    //     path: '/*',
    //     component: Error404
    // },

    // 命名视图
    {
        path: '/views',
        components: { //component不加s会报错：[Vue warn]: Failed to mount component: template or render function not defined.
            default: UserProfile, //显示在默认视图中
            all: UserPosts //显示在指定视图中
        }
    },
]

import Admain from '../views/backend/Admain.vue'
import UserList from '../views/backend/UserList.vue'
import UserEdit from '../views/backend/UserEdit.vue'
import UserAdd from '../views/backend/UserAdd.vue'
import Login from '../views/backend/Login.vue'

routes = [{
        // 后台布局路由
        path: '/backend',
        component: Admain, //后台主页
        children: [{
                path: 'list',
                component: UserList,
            },
            {
                path: 'edit',
                component: UserEdit,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'add',
                component: UserAdd,
                meta: {
                    requireAuth: true
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]


// 创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    console.log(to.matched);
    console.log('fullPath为:', to.fullPath);
    if (to.matched.some((recod) => recod.meta.requireAuth)) {
        // 检查是否有令牌
        var token = localStorage.getItem("Auth");
        if (!token) {
            next({
                name: "login",
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next();
        }
    } else {
        next();
    }
})

// 导出路由对象
export default router;