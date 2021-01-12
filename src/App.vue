<template>
  <div>
    <router-view v-if="isLoggedIn"></router-view>
    <Welcome v-else />
  </div>
</template>

<script>
import Welcome from './views/Welcome.vue';

export default {
  name: 'App',
  components: {
    Welcome,
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.loggedIn;
    },
  },
};
</script>
