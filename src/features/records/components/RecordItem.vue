<template>
  <v-sheet rounded elevation="2">
    <v-list-item link :to="viewPath">
      <v-list-item-content>
        <v-row>
          <v-col cols="12">{{ $t('records.item.create', { createdDateTime }) }}</v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-sheet>
</template>

<script>
import { parse, format } from '@/utils/datetime';

export default {
  name: 'RecordItem',
  props: {
    data: Object,
  },
  computed: {
    viewPath() {
      return `/records/${this.data.id}`;
    },
    createdDateTime() {
      const _createdDateTime = parse(this.data.createdDateTime);
      return format(_createdDateTime, 'MMM dd, yyyy');
    },
  },
};
</script>
