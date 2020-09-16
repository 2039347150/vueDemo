// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import App from './App3'
import router from './router'
import $ from 'jquery'
// import '../static/css/bootstrap.min.css'
// import '../static/js/bootstrap.min.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueResource from 'vue-resource'

import Router from 'vue-router'
const originReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
    return originReplace.call(this, location).catch(err => err)
}

// Vue.use({ VueAxios, Axios })
// Vue.use(VueResource)
Vue.prototype.$axios = Axios

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

// new Vue({
//     render: h => h(App),
//     router,
//     store,
// }).$mount('#app')