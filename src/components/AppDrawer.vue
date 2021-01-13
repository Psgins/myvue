<template>
  <v-navigation-drawer absolute temporary :value="value" @input="inputChange">
    <v-list nav>
      <v-list-item link to="/records">
        <v-list-item-icon><v-icon>mdi-history</v-icon></v-list-item-icon>
        <v-list-item-title>Records</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/testfail">
        <v-list-item-icon><v-icon>mdi-alert-circle-outline</v-icon></v-list-item-icon>
        <v-list-item-title>Test API fail</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item link @click="logout">
        <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppDrawer',
  props: {
    value: Boolean,
  },
  methods: {
    ...mapActions({
      login: 'core/login',
    }),
    logout() {
      this.login(undefined);
      this.$router.push('/').catch(() => {});
    },
    inputChange(event) {
      this.$emit('input', event);
    },
  },
};
</script>
