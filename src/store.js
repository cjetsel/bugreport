import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/chelseytest/bugs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    currentBug: {},
    comments: []
  },
  mutations: {
    setBugs(state, bugs = []) {
      state.bugs = bugs
    },
    setCurrentBug(state, currentBug) {
      state.currentBug = currentBug
    },
    setComments(state, comments) {
      state.comments = comments
    }
  },
  actions: {
    addComment({ commit, dispatch, state }, payload) {
      _api.post(state.currentBug._id + '/notes', payload)
        .then(res => {
          dispatch('getComments')
        })
    },
    async getComments({ commit, state }, id) {
      let res = await _api.get(state.currentBug._id + '/notes')
      commit('setComments', res.data)
    },
    async getBugs({ commit }) {
      let res = await _api.get('')
      commit('setBugs', res.data.results)
    },
    async getBug({ commit }, id) {
      let res = await _api.get(id)
      commit('setCurrentBug', res.data.results)
    },
    createBug({ commit, dispatch }, payload) {
      _api.post('', payload)
        .then(res => {
          dispatch('getBugs')
        })
        .catch(err => console.error(err))
    },
    setBug({ commit }, bug) {
      commit('setCurrentBug', bug)
    },
    async toggleClosed({ commit, dispatch }, id) {
      debugger
      let res = await _api.delete(id)
        .then(res => {
          commit('setCurrentBug', res.data)
        })
    }
  }
})
