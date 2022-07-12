import  Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
{
	state:{
		num:0,
		num2:0
	},
	getters:{
		getNum(state){
			return state.num2
		}
	},
	mutations:{
		increase(state,payload){
			state.num2+=payload?payload:1
			state.num++
		}
		
	},
	actions:{
		asyncIncrease(context){
			setTimeout(() => {
			    context.commit('increase',3)
			    }, 1000)
			
		}
		
	},
	modules:{}
}) 