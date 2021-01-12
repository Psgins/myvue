<template>
  <router-view></router-view>
</template>

<script>
import store from './store';

export default {
  created() {
    this.$store.registerModule('records', store);
  },
  beforeDestroy() {
    this.$store.dispatch('cleanupRecords');
    this.$store.unregisterModule('records');
  },
};
</script>
