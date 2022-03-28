<template>
  <div class="page-content">
    <div class="page-content-header">
      <slot name="header">
        <h2 class="page-content-header__title">{{ title }}</h2>
        <router-link v-if="!noHeaderButton" :to="headerButtonSettings.link" class="button page-content-header__button">
          <i :class="headerButtonSettings.icon" class="page-content-header__button-icon"></i>
          <div class="page-content-header__button-label" v-if="!$_isSmall">{{ headerButtonSettings.label }}</div>
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
import screenMixin from '@/mixins/screen'

export default {
  mixins: [screenMixin],

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

.page-content-header__button {
  display: flex;
  align-items: center;
}

.page-content-header__button-label {
  margin-left: var(--spacing-sm);
}
</style>
