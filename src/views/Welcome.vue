<template>
  <div id="welcome-page">
    <span>Welcome Page</span>
    <p @click="login">Login</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    login() {
      this.$store.dispatch('login', true);
    },
  },
};
</script>
