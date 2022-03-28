import axios from '@/assets/js/api'

const state = {
  news: []
}

const getters = {
  news: state => state.news
}

const actions = {
  fetchNews: async ({ commit }, query) => {
    try {
      const response = await axios.get(`/news?${query}`)
      commit('addNews', response.data)
    } catch (e) {
      console.log(e)
      throw Error('Couldn\'t fetch news')
    }
  },

  saveNews: async (_, payload) => {
    try {
      const response = await axios.post('/news/new', {
        ...payload
      })

      return response
    } catch (e) {
      throw Error('Couldn\'t save the category')
    }
  }
}

const mutations = {
  addNews: (state, payload) => {
    state.news = [...payload]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
