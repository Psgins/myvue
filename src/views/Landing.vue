<template>
  <v-app>
    <AppDrawer v-model="drawer" />
    <AppBar @appbar-icon-click="toggleDrawer" />
    <v-main>
      <v-container style="max-width: 1200px">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import AppDrawer from '@/components/AppDrawer.vue';

export default {
  name: 'Landing',
  components: {
    AppBar,
    AppDrawer,
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
