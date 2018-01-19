// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import firebase from 'firebase'

import 'vuetify/dist/vuetify.min.css'
import 'mdi/css/materialdesignicons.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

firebase.initializeApp({
  apiKey: 'AIzaSyDa-ze_65ozwE0HZOAWWbemoozlHXfhK1k',
  authDomain: 'cool-box-2a8b7.firebaseapp.com',
  databaseURL: 'https://cool-box-2a8b7.firebaseio.com',
  projectId: 'cool-box-2a8b7',
  storageBucket: 'https://cool-box-2a8b7.firebaseio.com',
  messagingSenderId: '619430236261',
  serverKey: 'AAAAkDjrUGU:APA91bFb73qaRDFFPzTwgf1H2mwsLKd-_HN10JJ5Hg9QyYuiyZUFPJxQWKi_ki-Cd82NVS9vWfdZlPw3ZHveK_7jxrklHl3U3R_wt2Q7JKWUYRGgW5lR8rmokl2bpzrXl4kNMEyaW-vI'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
