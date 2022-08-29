import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home.js';

Vue.use(Vuex);

// Vuex的作用是用于集中管理多组件的共享状态
export default new Vuex.Store({
	modules:{
		home
	}
})