import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/chelsey/bugs'
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
    async getComments({ commit, state }) {
      let res = await _api.get(state.currentBug._id + '/notes')
      commit('setComments', res.data.results)
    },

    async getCurrentComments({ commit }, id) {
      let res = await _api.get(id + "/notes")
      commit('setComments', res.data.results)
    },

    async getBugs({ commit }) {
      let res = await _api.get('')
      console.log(res.data.results)
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
      let res = await _api.delete(id)
        .then(res => {
          commit('setCurrentBug', res.data)
        })
    },
    async deleteComment({ commit, dispatch, state }, id) {
      let res = await _api.delete(state.currentBug._id + '/notes/' + id)
        .then(res => {
          dispatch('getComments')
        })
    }
  }
})
