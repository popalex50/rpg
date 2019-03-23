import Vue from 'vue'
import App from './App.vue'
import fightMonster from './assets/fightMonster.vue'
import characterCreate from './assets/characterCreate.vue'
import mainpage from './assets/mainpage.vue'
import accountCreate from './assets/accountCreate.vue'
import './../node_modules/bulma/css/bulma.css';
import VueRouter from 'vue-router';
import { routes }from './routes'; 
import VueResource from 'vue-resource';


Vue.component("fightMonster",fightMonster);
Vue.component("characterCreate",characterCreate);
Vue.component('mainpage',mainpage);
Vue.component('accountCreate',accountCreate);
Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
    linkActiveClass: 'is-active',
    routes:routes,
    mode:'history',
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
