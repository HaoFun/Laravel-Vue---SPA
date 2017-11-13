import VueRouter from 'vue-router';
let routes = [
    {
        path:'/',
        component:require('./components/pages/Home.vue')
    },
    {
        path:'/about',
        component:require('./components/pages/About.vue')
    },
    {
        path:'/posts/:id',
        name:'posts',
        component:require('./components/posts/Post.vue'),
    },
    {
        path:'/register',
        name:'register',
        component:require('./components/register/Register.vue'),
    },
    {
        path:'/confirm',
        name:'confirm',
        component:require('./components/confirm/Email.vue'),
    }
];
export default new VueRouter({
    //使用history 模式 ， url不顯示/#/
    mode:'history',
    routes
})