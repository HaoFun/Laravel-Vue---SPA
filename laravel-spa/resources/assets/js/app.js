require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import router from './routes';
import App from './components/App.vue';


Vue.use(VueRouter);
Vue.component('app',App);

const app = new Vue({
    el: '#app',
    router:router
});
