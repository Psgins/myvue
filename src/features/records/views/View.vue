<template>
  <div>
    <BackButton @click="goBack" />
    <h2 class="page-title">History Detail</h2>
    <SplashCard v-if="isLoading"></SplashCard>
    <template v-else>
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
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BackButton from '@/components/BackButton.vue';
import SplashCard from '@/components/SplashCard.vue';
import { parse, format } from '@/utils/datetime';

export default {
  name: 'RecordView',
  components: {
    SplashCard,
    BackButton,
  },
  data: function() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      data: 'records/VIEW_DATA',
    }),
    createdDateTime() {
      const _createdDateTime = parse(this.data.createdDateTime, "yyyy-MM-dd'T'HH:mm:ssxxx", new Date());
      return format(_createdDateTime, 'MMM dd, yyyy', new Date());
    },
  },
  methods: {
    ...mapActions({
      fetchItem: 'records/FETCH_ITEM',
      storeCleanup: 'records/CLEANUP',
    }),
    goBack() {
      this.$router.go(-1);
    },
    cleanup() {
      this.storeCleanup('viewData');
    },
  },
  created: async function() {
    const id = parseInt(this.$route.params.id, 10);
    try {
      this.isLoading = true;
      await this.fetchItem(id);
    } finally {
      this.isLoading = false;
    }
  },
  destroyed() {
    this.cleanup();
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
