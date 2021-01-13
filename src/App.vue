<template>
  <div>
    <CommonDialog />
    <router-view v-if="loginInfo"></router-view>
    <Welcome v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Welcome from './views/Welcome.vue';
import CommonDialog from '@/components/CommonDialog';

export default {
  name: 'App',
  components: {
    Welcome,
    CommonDialog,
  },
  computed: {
    ...mapGetters({
      loginInfo: 'core/loginInfo',
    }),
  },
};
</script>
