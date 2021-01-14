<template>
  <v-menu offset-y bottom offset-x right>
    <template v-slot:activator="{ on, attr }">
      <v-btn plain v-bind="attr" v-on="on" class="selected-lang">{{ currentLanguage }}</v-btn>
    </template>
    <v-sheet>
      <div>
        <v-list flat>
          <v-list-item-content>
            <v-list-item v-for="language in availableLang" :key="language.code" @click="changeLanguage(language.code)">
              <v-list-item-title>
                {{ language.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-content>
        </v-list>
      </div>
    </v-sheet>
  </v-menu>
</template>

<script>
export default {
  name: 'LanguageButton',
  data: function() {
    return {
      availableLang: [
        { code: 'en', text: 'English' },
        { code: 'th', text: 'ไทย' },
      ],
    };
  },
  computed: {
    currentLanguage() {
      return this.availableLang.find(lang => lang.code === this.$i18n.locale)?.text ?? 'N/A';
    },
  },
  methods: {
    changeLanguage(langCode) {
      this.$i18n.locale = langCode;
    },
  },
};
</script>

<style scoped>
.selected-lang {
  color: white;
}
</style>
