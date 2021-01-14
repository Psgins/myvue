<template>
  <div>
    <h2 class="records-title">{{ $t('records.manage.title') }}</h2>
    <SplashCard v-if="isLoading"></SplashCard>
    <template v-else>
      <div v-if="records">
        <v-row v-for="record in records" :key="record.id">
          <v-col cols="12">
            <RecordItem :data="record"></RecordItem>
          </v-col>
        </v-row>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SplashCard from '@/components/SplashCard.vue';
import RecordItem from '../components/RecordItem.vue';

export default {
  name: 'RecordManage',
  components: {
    RecordItem,
    SplashCard,
  },
  data: function() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      records: 'records/RECORD_LIST',
    }),
  },
  methods: {
    ...mapActions({
      fetchList: 'records/FETCH_LIST',
      storeCleanup: 'records/CLEANUP',
    }),
    cleanup() {
      this.storeCleanup('recordList');
    },
  },
  created: async function() {
    this.isLoading = true;
    try {
      await this.fetchList();
    } finally {
      this.isLoading = false;
    }
  },
  destroyed() {
    this.cleanup('recordList');
  },
};
</script>

<style scoped>
.records-title {
  padding-bottom: 16px;
}
</style>
