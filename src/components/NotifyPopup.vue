<template>
<transition name="slide-vertical">
  <div v-if="value" class="notify-popup" :style="notifyPopupStyles">{{ notifyProps.message }}</div>
</transition>
</template>

<script>
export default {
  data () {
    return {
      timeout: null
    }
  },

  props: {
    notifyProps: {
      type: Object,
      default: () => ({})
    },

    value: {
      type: Boolean
    }
  },

  watch: {
    value () {
      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        this.$emit('input', false)
      }, 2000)
    }
  },

  computed: {
    notifyPopupStyles () {
      return `background-color: var(${this.notifyProps.type === 'success'
        ? '--blue-1'
        : '--negative-color'})
      `
    }
  }
}
</script>

<style>
.notify-popup {
  color: #fff;
  padding: var(--spacing-lg) var(--spacing-xl);
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 20px;
  border-radius: var(--radius-lg);
  transform: translateX(-50%);
}
</style>
