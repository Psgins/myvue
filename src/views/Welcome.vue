<template>
  <div id="welcome-page">
    <span>Welcome Page</span>
    <p @click="login">Login</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Welcome',
  methods: {
    ...mapActions({
      doLogin: 'core/login',
    }),
    login() {
      this.doLogin({});
    },
  },
};
</script>
