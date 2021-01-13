<template>
  <v-dialog persistent :value="isDialogOpen" @input="valueChanges" @click:outside="closeDialog" max-width="520">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn plain @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      commonDialog: 'core/commonDialog',
    }),
    isDialogOpen() {
      return Boolean(this.commonDialog);
    },
    title() {
      return this.commonDialog?.title;
    },
    message() {
      return this.commonDialog?.message;
    },
  },
  methods: {
    ...mapActions({
      update: 'core/setDialog',
    }),
    valueChanges(isOpen) {
      if (!isOpen) {
        this.update(undefined);
      }
    },
    closeDialog() {
      this.valueChanges(false);
    },
  },
};
</script>
