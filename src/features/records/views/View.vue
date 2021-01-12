<template>
  <div>
    <BackButton @click="goBack" />
    <h2 class="page-title">History Detail</h2>
    <v-sheet rounded class="page-sheet" elevation="2" v-if="data">
      <v-row>
        <v-col cols="2">Created at</v-col>
        <v-col cols="10">{{ createdDateTime }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="2">Weight</v-col>
        <v-col cols="10">{{ data.weight }}</v-col>
      </v-row>
    </v-sheet>
    <SplashCard v-else></SplashCard>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue';
import SplashCard from '@/components/SplashCard.vue';
import { parse, format } from '@/utils/datetime';

export default {
  name: 'RecordView',
  components: {
    SplashCard,
    BackButton,
  },
  computed: {
    data() {
      return this.$store.state.records.viewData;
    },
    createdDateTime() {
      const _createdDateTime = parse(this.data.createdDateTime, "yyyy-MM-dd'T'HH:mm:ssxxx", new Date());
      return format(_createdDateTime, 'MMM dd, yyyy', new Date());
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    const id = parseInt(this.$route.params.id, 10);
    this.$store.dispatch('fetchRecord', id);
  },
  beforeDestroy() {
    this.$store.dispatch('cleanupRecords');
  },
};
</script>

<style scoped>
.page-title {
  margin-bottom: 16px;
}
.page-sheet {
  padding: 16px;
}
</style>
