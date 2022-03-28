<template>
  <page-content class="page-news-list" :header-button-settings="headerButtonSettings" title="News list">
    <template #default>
      <div class="page-news-list__filter">
        <input v-model="search" class="page-news-list__filter-input" type="text" placeholder="Search by title" @keyup.enter="searchNews">
        <i class="fa-solid fa-magnifying-glass page-news-list__filter-icon" @click="searchNews"/>
      </div>
      <div class="page-news-list__wrapper">
        <div v-if="hasNews">
          <news-card v-for="(news, index) in newsList" :key="index" :news="news"/>
        </div>
        <div v-else class="page-news-list__empty">
          <i class="fa-solid fa-circle-exclamation page-news-list__empty-icon"></i>
          <div class="page-news-list__empty-message">Nothing to see here</div>
        </div>
      </div>
      <notify-popup v-model="showNotify" :notify-props="notifyProps"/>
    </template>
  </page-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NewsCard from '@/components/NewsCard.vue'

export default {
  components: { NewsCard },

  data () {
    return {
      search: '',
      showNotify: false,
      notifyProps: {
        message: '',
        type: 'success'
      }
    }
  },

  async created () {
    let query

    if (this.$route.query.title) query = `title=${this.$route.query.title}`

    try {
      await this.fetchNews(query)
    } catch (e) {
      this.notifyProps.message = 'Oops, we coudn\'t load the news list'
      this.notifyProps.type = 'error'
      this.showNotify = true
    }
  },

  computed: {
    ...mapGetters('news', { newsList: 'news' }),

    headerButtonSettings () {
      return {
        label: 'Create news',
        icon: 'fa-solid fa-circle-plus',
        link: '/news/create'
      }
    },

    hasNews () {
      return !!this.newsList.length
    }
  },

  methods: {
    ...mapActions('news', ['fetchNews']),

    searchNews () {
      if (!this.search) {
        this.$router.replace({ path: '/news' })
      } else {
        this.$router.replace({ query: { title: this.search } })
      }

      this.fetchNews(`title=${this.search}`)
    }
  }
}
</script>

<style>
.page-news-list__filter {
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
}

.page-news-list__filter-input {
  flex-grow: 1;
}

.page-news-list__filter-icon {
  font-size: var(--text-md);
  margin-left: var(--spacing-md);
  cursor: pointer;
}

.page-news-list__empty {
  margin-top: var(--spacing-lg);
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--grey-2);
}

.page-news-list__empty-icon {
  font-size: var(--text-xl);
  margin-bottom: var(--spacing-lg);
}

.page-news-list__empty-message {
  font-size: var(--text-lg);
}

@media (max-width: 500px) {
  .page-news-list__filter-icon {
    display: none;
  }
}
</style>
