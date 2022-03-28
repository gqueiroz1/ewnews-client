import axios from '@/assets/js/api'

const state = {
  categories: []
}

const getters = {
  categories: state => state.categories
}

const actions = {
  fetchCategories: async ({ commit }) => {
    try {
      const response = await axios.get('/categories')
      commit('addCategories', response.data)
    } catch (e) {
      console.log(e)
      throw Error('Couldn\'t fetch categories')
    }
  },

  saveCategory: async (_, payload) => {
    try {
      const response = await axios.post('/categories/new', {
        ...payload
      })

      return response
    } catch (e) {
      throw Error('Couldn\'t save the category')
    }
  }
}

const mutations = {
  addCategories: (state, payload) => {
    state.categories = [...payload]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
