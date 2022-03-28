import axios from '@/assets/js/api'

const state = {
  user: {}
}

const getters = {
  user: state => state.user
}

const actions = {
  saveUser: async (_, payload) => {
    try {
      const response = await axios.post('/user/new', {
        body: { ...payload }
      })

      return response
    } catch (e) {
      console.log(e.message)
    }
  },

  login: async ({ commit }, payload) => {
    try {
      const response = await axios.post('/user/login', {
        body: { ...payload }
      })

      commit('setUser', response)

      return response
    } catch (e) {
      if (e.response.status === 404) throw new Error('Usuário ou senha incorretos')

      console.log(e)
    }
  }

}

const mutations = {
  setUser: (state, payload) => {
    state.user = payload.data.user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
