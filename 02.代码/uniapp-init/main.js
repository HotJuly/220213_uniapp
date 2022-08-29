import App from './App'

import Vue from 'vue'

import myAxios from 'utils/myAxios.js';
import store from './store/index.js';


Vue.config.productionTip = false

// 此处相当于在声明App组件代表整个小程序
App.mpType = 'app'

Vue.prototype.$myAxios = myAxios;

const app = new Vue({
    ...App,
	store
	// el:"#app",
	// render:h=>h(App)
	// onLaunch: function() {
	// 	console.log('App Launch')
	// },
	// onShow: function() {
	// 	console.log('App Show')
	// },
	// onHide: function() {
	// 	console.log('App Hide')
	// }
})
app.$mount()
