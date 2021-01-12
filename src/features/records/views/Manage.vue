<template>
  <div>
    <h2 class="records-title">Records</h2>
    <div v-if="records">
      <v-row v-for="record in records" :key="record.id">
        <v-col cols="12">
          <RecordItem :data="record"></RecordItem>
        </v-col>
      </v-row>
    </div>
    <SplashCard v-else></SplashCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SplashCard from '@/components/SplashCard.vue';
import RecordItem from '../components/RecordItem.vue';

export default {
  name: 'RecordManage',
  components: {
    RecordItem,
    SplashCard,
  },
  computed: {
    ...mapGetters({
      records: 'getRecordList',
    }),
  },
  created() {
    this.$store.dispatch('fetchRecords');
  },
};
</script>

<style scoped>
.records-title {
  padding-bottom: 16px;
}
</style>
