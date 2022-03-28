<template>
  <transition name="slide">
    <div v-if="isMenuOpen" class="menu-drawer">
      <i class="fa-solid fa-xmark menu-drawer__close-button" @click="closeMenuDrawer"></i>
      <div class="menu-drawer__menu-list">
        <router-link exact-active-class="active-link" v-for="(link, index) in menuLinks" :key="index" :to="link.link" @click.native="link.handler" class="menu-drawer__menu-item">
          <i class="fa-solid menu-drawer__menu-item-icon" :class="link.icon"></i>
          {{ link.label }}
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isMenuOpen: {
      type: Boolean
    }
  },

  computed: {
    menuLinks () {
      return [
        {
          label: 'News list',
          link: '/news',
          icon: 'fa-rectangle-list',
          handler: this.closeMenuDrawer
        },
        {
          label: 'Create news',
          link: '/news/create',
          icon: 'fa-circle-plus',
          handler: this.closeMenuDrawer
        },
        {
          label: 'Create categories',
          link: '/categories/create',
          icon: 'fa-circle-plus',
          handler: this.closeMenuDrawer
        },
        {
          label: 'Logout',
          link: '/login',
          icon: 'fa-arrow-right-from-bracket',
          handler: this.logOut
        }
      ]
    }
  },

  methods: {
    closeMenuDrawer () {
      this.$emit('close-menu-drawer')
    },

    logOut () {
      localStorage.clear()
      this.closeMenuDrawer()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.menu-drawer {
  display: flex;
  align-items: flex-start;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  bottom: 0;
  height: 100vh;
  width: 400px;
  max-width: 90vw;
  box-shadow: var(--primary-shadow);
}

.menu-drawer__close-button {
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: var(--text-md);
  color: var(--primary-contrast);
}

.menu-drawer__menu-list {
  width: 100%;
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-md);
}

.menu-drawer__menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: var(--spacing-md);
  transition: all var(--medium-paced-transition);
}

.menu-drawer__menu-item:hover {
  background-color: var(--primary-color);
}

.menu-drawer__menu-item-icon {
  margin-right: var(--spacing-md);
}
</style>
