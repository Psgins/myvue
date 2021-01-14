import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messagesEn from './en';
import messagesTh from './th';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: messagesEn,
    th: messagesTh,
  },
});
