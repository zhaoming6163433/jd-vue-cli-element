import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    menulist:[],//菜单列表
    refreshname:'',//刷新页面二级标题
}
const mutations = {
	SAVE_MENU_LIST(state, obj) {
		state.menulist = obj;
    },
    SAVE_REFRESH_NAME(state, obj) {
		state.refreshname = obj;
    }
}
const getters = {

}
const actions = {

}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})
