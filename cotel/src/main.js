// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import Login from './Login'
import App from './App'
import VueSessionStorage from 'vue-sessionstorage'

import VueRouter from 'vue-router'
import routes from './router.js'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueSessionStorage);


Vue.config.productionTip = false;

/* eslint-disable no-new */
let MainVue = new Vue({
  el: '#app',
  router: routes,
  data: {
    userIsAuthorized: false,
  },
  created: function () {
    let user = this.$session.get('username'); // Set the username in session Storage
    if(user) this.userIsAuthorized = true;
  },
  components: { Login , App },
  template: `<App v-if="userIsAuthorized"></App>
             <Login :userIsAuthorized="userIsAuthorized" v-else></Login>`
});
