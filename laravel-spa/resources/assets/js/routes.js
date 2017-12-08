import VueRouter from 'vue-router';
import Store from './store/index.js';
import Jwt from './helpers/jwt.js';

let routes = [
    {
        path:'/',
        component:require('./components/pages/Home.vue'),
        meta:{}
    },
    {
        path:'/about',
        component:require('./components/pages/About.vue'),
        meta:{}
    },
    {
        path:'/posts/:id',
        name:'posts',
        component:require('./components/posts/Post.vue'),
        meta:{}
    },
    {
        path:'/register',
        name:'register',
        component:require('./components/register/Register.vue'),
        meta:{}
    },
    {
        path:'/login',
        name:'login',
        component:require('./components/login/Login.vue'),
        meta:{}
    },
    {
        path:'/confirm',
        name:'confirm',
        component:require('./components/confirm/Email.vue'),
        meta:{}
    },
    {
        path:'./profile',
        name:'profile',
        component:require('./components/user/Profile.vue'),
        meta:{requireAuth: true}
    }
];
const router = new VueRouter({
    //使用history 模式 ， url不顯示/#/
    mode:'history',
    routes
});

router.beforeEach((to,from,next) => {
    if(to.meta.requireAuth)
    {
        return (Store.state.AuthUser.authenticated || Jwt.getToken()) ? next():next({'name':'login'});
    }
    return next();
});

export default router;