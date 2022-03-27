<template>
  <header class="ew-header">
    <div class="ew-header__menu">
      <i class="fa-solid fa-bars ew-header__menu-icon" @click="openMenuDrawer"></i>
      <router-link to="/news">
        <h1 class="ew-header__title">EWNews</h1>
      </router-link>
    </div>
    <div class="ew-header__user-box">
      <p class="ew-header__user-name">Guilherme Queiróz</p>
      <p class="ew-header__user-email">g.aqueiroz19@gmail.com</p>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    openMenuDrawer () {
      this.$emit('open-menu')
    }
  }
}
</script>

<style>
.ew-header {
  background-color: var(--primary-color);
  padding-right: var(--spacing-md);
  padding-left: var(--spacing-md);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
}

.ew-header__menu {
  display: flex;
  align-items: center;
}

.ew-header__menu-icon {
  font-size: var(--text-md);
  margin-right: var(--spacing-md);
  cursor: pointer;
}

.ew-header__title {
  color: #fff;
  font-weight: bold;
  font-size: var(--text-lg);
}

.ew-header__user-box {
  background-color: var(--primary-contrast);
  padding-top: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
  padding-right: var(--spacing-md);
  padding-left: var(--spacing-md);
  border-radius: var(--radius-md);
  text-align: left;
}

.ew-header__user-name {
  font-weight: bold;
  font-size: var(--text-sm);
  margin-bottom: var(--spacing-xs);
}
</style>
