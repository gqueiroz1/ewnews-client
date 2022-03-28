import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PageContent from './components/PageContent.vue'
import NotifyPopup from './components/NotifyPopup.vue'
import NewsCard from './components/NewsCard.vue'
Vue.component('page-content', PageContent)
Vue.component('notify-popup', NotifyPopup)
Vue.component('news-card', NewsCard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
