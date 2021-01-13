<template>
  <div>
    <h2 class="page-title">Test Fail</h2>
    <SplashCard v-if="isLoading" />
    <span v-else>After fetch</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from './store';
import SplashCard from '@/components/SplashCard.vue';

export default {
  components: {
    SplashCard,
  },
  data: function() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      fetch: 'testfail/FETCH_FAIL',
    }),
  },
  created: async function() {
    this.$store.registerModule('testfail', store, { preserveState: false });
    try {
      this.isLoading = true;
      await this.fetch();
    } catch (error) {
      console.log(error);
    }
    this.isLoading = false;
  },
  destroyed() {
    this.$store.unregisterModule('testfail');
  },
};
</script>

<style scoped>
.page-title {
  margin-bottom: 16px;
}
</style>
