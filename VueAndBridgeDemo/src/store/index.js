import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  token:''
}

const getters = {

}

const mutations = {
  set_token(state,val){
    state.token = val;
  }
}

const actions = {

}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
