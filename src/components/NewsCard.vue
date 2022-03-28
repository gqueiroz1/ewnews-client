<template>
  <div class="news-card">
    <div class="news-card__header">
      <span class="news-card__title">{{ news.title }}</span>
      <div class="news-card__header-wrapper">
        <span class="news-card__category">{{ news.category }}</span>
        <span class="news-card__created-at">{{ getCreatedAtDate(news.createdAt) }}</span>
      </div>
    </div>
    <div class="news-card__description">
      {{ news.description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },

  methods: {
    getCreatedAtDate (date) {
      const formattedDate = new Date(date)
      return formattedDate.toLocaleDateString('pt-br')
    }
  }
}
</script>

<style>
.news-card {
  width: 100%;
  background-color: var(--light-grey);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: var(--medium-paced-transition);
  cursor: pointer;
  margin-bottom: var(--spacing-md);
}

.news-card__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.news-card__title {
  font-weight: bold;
  font-size: var(--text-md);
}

.news-card__category {
  color: #fff;
  margin-right: var(--spacing-md);
  background-color: var(--blue-1);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
}

.news-card__created-at {
  color: var(--grey-2);
}

.news-card__description {
  color: var(--grey-2);
}

@media (max-width: 768px) {
  .news-card__title {
    flex-basis: 100%;
    margin-bottom: var(--spacing-sm);
  }
}
</style>
