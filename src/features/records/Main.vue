<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex';
import store from './store';

export default {
  methods: {
    ...mapActions({
      cleanup: 'records/CLEANUP',
    }),
  },
  created() {
    this.$store.registerModule('records', store, { preserveState: false });
  },
  destroyed() {
    this.$store.unregisterModule('records');
  },
};
</script>
