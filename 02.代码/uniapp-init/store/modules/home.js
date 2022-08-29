import {SETINDEXDATA} from '../mutation-types.js'
const state={
	indexData:{}
}

const mutations={
	// 转大写:ctrl+shift+u
	[SETINDEXDATA](state,indexData){
		state.indexData = indexData;
	}
}

const actions={
	async getIndexData(context){
		// 注意点:
		// this->store对象,action函数的第一个实参是store对象的浅拷贝对象(context对象)
		// action其实可以越过mutation,直接更新Vuex的state数据
		// 之所以不这么做,是因为Vue devtools只会记录触发了多少个mutation
		// console.log('getIndexData',context)
		const result = await this._vm.$myAxios('/getIndexData');
		// console.log('result',result)
		context.commit(SETINDEXDATA,result)
		// context.state.indexData = result;
		
	}
}

const getters={
	
}


export default {
	namespaced:true,
	state,
	actions,
	mutations,
	getters
}