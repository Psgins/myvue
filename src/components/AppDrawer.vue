<template>
  <v-navigation-drawer absolute temporary :value="value" @input="inputChange">
    <v-list nav>
      <v-list-item link to="/records">
        <v-list-item-icon><v-icon>mdi-history</v-icon></v-list-item-icon>
        <v-list-item-title>Records</v-list-item-title>
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
export default {
  name: 'AppDrawer',
  props: {
    value: Boolean,
  },
  methods: {
    logout() {
      this.$store.dispatch('login', false);
      this.$router.push('/');
    },
    inputChange(event) {
      this.$emit('input', event);
    },
  },
};
</script>
