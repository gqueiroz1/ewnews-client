<template>
  <page-content class="page-news-form" noHeaderButton title="Create news">
    <template #default>
      <form @submit.prevent="createNews" class="page-news-form__form">
        <div class="page-news-form__row">
          <div class="page-news-form__input-wrapper page-news-form__input-wrapper--title">
            <label class="page-news-form__input-label" for="fullname">News title</label>
            <input v-model="news.title" class="page-news-form__input" type="text" name="title" />
          </div>
          <div class="page-news-form__input-wrapper page-news-form__input-wrapper--category">
            <label class="page-news-form__input-label" for="fullname">Category</label>
            <select v-model="news.category" class="page-news-form__input" name="category">
              <option v-for="(category, index) in categories" :key="index" :value="category.title">{{ category.title }}</option>
            </select>
          </div>
          <div class="page-news-form__input-wrapper">
            <label class="page-news-form__input-label" for="fullname">Description</label>
            <textarea v-model="news.description" class="page-news-form__input" name="description" />
          </div>
          <div class="page-news-form__actions">
            <router-link to="/" class="page-news-form__cancel-button button">Cancel</router-link>
            <button type="submit" class="page-news-form__create-button button">Create</button>
          </div>
        </div>
      </form>
    <notify-popup v-model="showNotify" :notify-props="notifyProps"/>
    </template>
  </page-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      news: {
        title: '',
        description: '',
        category: ''
      },
      showNotify: false,
      notifyProps: {
        message: '',
        type: 'success'
      }
    }
  },

  async created () {
    try {
      await this.fetchCategories()
    } catch (e) {
      this.notifyProps.message = 'Oops, we coudn\'t load the categories'
      this.notifyProps.type = 'error'
      this.showNotify = true
    }
  },

  computed: {
    ...mapGetters('categories', ['categories']),

    headerButtonSettings () {
      return {
        label: 'Create news',
        icon: 'fa-solid fa-circle-plus',
        link: '/'
      }
    }
  },

  methods: {
    ...mapActions('categories', ['fetchCategories']),
    ...mapActions('news', ['saveNews']),

    async createNews () {
      try {
        await this.saveNews(this.news)
        this.notifyProps.message = 'News successfully created'
      } catch (e) {
        this.notifyProps.message = 'Oops, we couldn\'t save the news'
        this.notifyProps.type = 'error'
      } finally {
        this.showNotify = true
        this.news.title = ''
        this.news.category = ''
        this.news.description = ''
      }
    }
  }
}
</script>

<style>
.page-news-form__row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.page-news-form__input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: var(--spacing-md);
}

.page-news-form__input-wrapper--title,
.page-news-form__input-wrapper--category {
  width: calc(50% - 1rem);
}

.page-news-form__actions {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.page-news-form__actions .button {
  width: 150px;
  text-align: center;
}

.page-news-form__cancel-button {
  background-color: var(--grey-2);
  margin-right: var(--spacing-md);
}

.page-news-form__cancel-button:hover {
  background-color: var(--grey-1);
}
</style>
