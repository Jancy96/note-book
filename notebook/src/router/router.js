import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Login from "../components/Login";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            // redirect: '/home',
            name:'home',
            component: Home
        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        // {
        //     path: '/shop',
        //     component: shop,
        //     children: [{
        //         path: 'foodDetail', //食品详情页
        //         component: foodDetail,
        //     }, {
        //         path: 'shopDetail', //商铺详情页
        //         component: shopDetail,
        //         children: [{
        //             path: 'shopSafe', //商铺安全认证页
        //             component: shopSafe,
        //         }, ]
        //     }]
        // },
    ]
})
