<template>
  <page-content class="page-category-form" noHeaderButton title="Create category">
    <template #default>
      <form @submit.prevent="createCategory" class="page-category-form__form">
        <div class="page-category-form__row">
          <div class="page-category-form__input-wrapper">
            <label class="page-category-form__input-label" for="fullname">Category title</label>
            <input v-model="categories.title" class="page-category-form__input" type="text" name="title" />
          </div>
          <div class="page-category-form__actions">
            <router-link to="/" class="page-category-form__cancel-button button">Cancel</router-link>
            <button type="submit" class="page-category-form__create-button button">Create</button>
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
      categories: {
        title: ''
      },
      showNotify: false,
      notifyProps: {
        message: '',
        type: 'success'
      }
    }
  },

  computed: {
    ...mapGetters('categories', { categoriesList: 'categories' }),

    headerButtonSettings () {
      return {
        label: 'Create categories',
        icon: 'fa-solid fa-circle-plus',
        link: '/'
      }
    },

    notifyMessage () {
      return 'Funciona'
    }
  },

  methods: {
    ...mapActions('categories', ['saveCategory']),

    async createCategory () {
      if (!this.categories.title) {
        this.notifyProps.message = 'Empty category title'
        this.notifyProps.type = 'error'
        this.showNotify = true
        return
      }

      try {
        await this.saveCategory(this.categories)
        this.notifyProps.message = 'Category successfully created'
      } catch (e) {
        this.notifyProps.message = 'Oops, we couldn\'t save the category'
        this.notifyProps.type = 'error'
      } finally {
        this.showNotify = true
        this.categories.title = ''
      }
    }
  }
}
</script>

<style>
.page-category-form__row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.page-category-form__input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: var(--spacing-md);
}

.page-category-form__input-wrapper--title,
.page-category-form__input-wrapper--category,
.page-category-form__input-wrapper--image {
  width: calc(33% - 1rem);
}

.page-category-form__actions {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.page-category-form__actions .button {
  width: 150px;
  text-align: center;
}

.page-category-form__cancel-button {
  background-color: var(--grey-2);
  margin-right: var(--spacing-md);
}

.page-category-form__cancel-button:hover {
  background-color: var(--grey-1);
}
</style>
