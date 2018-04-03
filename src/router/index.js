import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/main/Main.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Main
    }]
});
