<template>
  <v-btn plain class="root" @click="handleClick">
    <v-icon size="16">mdi-arrow-left</v-icon>
    <span class="button-label">{{ $t('common.goBack') }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style scoped>
.v-btn.root {
  padding: 0px 0px;
  font-size: 0.8rem;
}
.button-label {
  margin-left: 8px;
  text-transform: none;
}
</style>
