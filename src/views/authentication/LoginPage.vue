<template>
  <div class="page-login">
    <div class="page-login__login-wrapper">
      <h1 class="page-login__title">EWNews</h1>
      <div class="page-login__login-box">
        <span class="page-login__login-title">{{ actionLabel }}</span>
        <form class="page-login__form">
          <div v-if="!isLogin" class="page-login__input-wrapper">
            <label class="page-login__input-label" for="fullname">Full name</label>
            <input v-model="user.fullName" class="page-login__input" type="text" name="fullname">
          </div>
          <div class="page-login__input-wrapper">
            <label class="page-login__input-label" for="email">Email</label>
            <input v-model="user.email" class="page-login__input" type="email" name="email">
          </div>
          <div class="page-login__input-wrapper">
            <label class="page-login__input-label" for="password">Password</label>
            <input v-model="user.password" class="page-login__input" type="password" name="password">
          </div>
          <button type="submit" class="page-login__button button"> {{ actionLabel }} </button>
          <p v-if="isLogin" class="page-login__sign-up">Don't have an account? <router-link to="/register" class="page-login__sign-up--link">Sign up</router-link></p>
          <p v-else class="page-login__sign-up"><router-link class="page-login__sign-up--link" to="/login">Back to login</router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        fullName: '',
        email: '',
        password: ''
      }
    }
  },

  computed: {
    isLogin () {
      return this.$route.name === 'Login'
    },

    actionLabel () {
      return this.isLogin ? 'Login' : 'Register'
    }
  }
}
</script>

<style>
.page-login {
  background-color: var(--primary-color);
  width: 100vw;
  height: 45vh;
  position: relative;
}

.page-login__login-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.page-login__title {
  margin-bottom: var(--spacing-lg);
  font-size: var(--text-xl);
  color: #fff;
}

.page-login__login-box {
  background-color: #fff;
  box-shadow: var(--primary-shadow);
  padding: 1rem;
  border-radius: var(--radius-lg);
}

.page-login__login-title {
  color: var(--primary-color);
  font-size: var(--text-md);
  display: inline-block;
  margin-bottom: var(--spacing-md);
  font-weight: bold;
}

.page-login__button {
  margin-top: var(--spacing-md);
}

.page-login__input-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: var(--spacing-md);
}

.page-login__input-label {
  text-align: left;
  flex-basis: 100%;
  color: var(--grey-1);
  margin-bottom: var(--spacing-xs);
}

.page-login__input {
  padding: var(--spacing-md);
  border: 1px solid var(--grey-1);
  border-radius: var(--radius-sm);
  flex-basis: 100%;
}

.page-login__sign-up {
  margin-top: var(--spacing-sm);
  color: var(--grey-1);
}

.page-login__sign-up--link {
  cursor: pointer;
  color: var(--blue-1);
  font-weight: bold;
  text-decoration: underline;
}
</style>
