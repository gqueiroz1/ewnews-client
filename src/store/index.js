import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import categories from './categories'
import news from './news'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    categories,
    news
  }
})
