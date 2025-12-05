import Vuex from 'vuex'
import Vue from 'vue'
import user from '@/store/modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		user
	},
	
})

export default store