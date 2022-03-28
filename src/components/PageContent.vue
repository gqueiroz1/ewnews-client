<template>
  <div class="page-content">
    <div class="page-content-header">
      <slot name="header">
        <h2 class="page-content-header__title">{{ title }}</h2>
        <router-link v-if="!noHeaderButton" :to="headerButtonSettings.link" class="button page-content-header__button">
          <i :class="headerButtonSettings.icon" class="page-content-header__button-icon"></i>
          {{ headerButtonSettings.label }}
        </router-link>
      </slot>
    </div>
    <div class="page-content-default">
      <slot />
    </div>
    <div class="page-content-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },

    headerButtonSettings: {
      type: Object,
      default: () => ({})
    },

    noHeaderButton: {
      type: Boolean
    }
  }
}
</script>

<style>
.page-content {
  margin-top: var(--header-height);
  padding: var(--spacing-md);
}

.page-content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--spacing-md) 0;
}

.page-content-header__button-icon {
  margin-right: var(--spacing-sm);
}
</style>
