require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import router from './routes';
import store from './store/index';
import App from './components/App.vue';
import jwtToken from './helpers/jwt';
import zh_TW from './locale/zh_TW';
import VeeValidate, { Validator } from 'vee-validate';

axios.interceptors.request.use(function (config) {
   if(jwtToken.getToken())
   {
       config.headers['Authorization'] = 'Bearer '+ jwtToken.getToken();
   }
   return config;
},function (error) {
    console.log('5555');
    return Promise.reject(error);
});

Validator.localize('zh_TW', zh_TW);

Vue.use(VueRouter);
Vue.use(VeeValidate, {
    locale: 'zh_TW'
});

Vue.component('app',App);

const app = new Vue({
    el: '#app',
    router:router,
    store
});
