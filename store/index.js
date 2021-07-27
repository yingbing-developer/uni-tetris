import Vue from 'vue'
import Vuex from 'vuex'
import { HISCORE } from '@/assets/js/config.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		hiScore: uni.getStorageSync(HISCORE) || 0, //最高分数
	},
	getters: {
		//获取当前登录信息
		getHiScore (state) {
			return state.hiScore
		}
	},
    mutations: {
		//设置登录信息
		setHiScore (state, score) {
			state.hiScore = score;
			uni.setStorageSync(HISCORE, score)
		},
		//清楚登录信息
		clearHiscore (state) {
			state.hiScore = '';
			uni.removeStorageSync(HISCORE);
		}
	},
    actions: {}
})
export default store