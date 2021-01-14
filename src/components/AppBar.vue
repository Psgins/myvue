<template>
  <v-app-bar app dense absolute color="blue darken-4">
    <v-app-bar-nav-icon class="test" @click="iconClick"></v-app-bar-nav-icon>
    <v-app-bar-title><span class="nav-title" @click="goHome">Universal History</span></v-app-bar-title>
    <v-spacer></v-spacer>
    <LanguageButton />
  </v-app-bar>
</template>

<script>
import LanguageButton from './LanguageButton';

export default {
  name: 'AppBar',
  components: {
    LanguageButton,
  },
  methods: {
    goHome() {
      this.$router.push('/', () => {});
    },
    iconClick() {
      this.$emit('appbar-icon-click');
    },
  },
};
</script>

<style scoped>
.nav-title,
/* override icon color */
.v-btn.v-btn--icon.test {
  color: whitesmoke;
}
</style>
