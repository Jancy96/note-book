import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            name:'home',
            component: Home
        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/register',
            name:'register',
            component: Register
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
