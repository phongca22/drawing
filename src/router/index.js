import Vue from 'vue';
import Router from 'vue-router';
import Drawing from '../components/main/Drawing.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Drawing',
        component: Drawing
    }]
});
