import vue from 'vue'
import vueRouter from 'vue-router'


vue.use(vueRouter);
const originalReplace = vueRouter.prototype.replace
vueRouter.prototype.replace = function (location) {
    return originalReplace.call(this, location).catch(err => err)
}
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => err)
}

let routes = [
    {
        path: '/',
        fullPath: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
        children: [
            {
                path: 'timeTaskManage',
                name: 'timeTaskManage',
                component: () => import('../views/timeTaskManage/timeTaskManage')
            }
        ]
    }
];

const router = new vueRouter({
    routes: routes,
    // // mode: 'history',
    // base: process.env.BASE_URL,
});
export default router
