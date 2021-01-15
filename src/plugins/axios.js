import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.interceptors.request.use(config => {
  // construct request url
  config.url = new URL(config.url, process.env.VUE_APP_API_BASEURL).toString();
  return config;
});

Vue.use(VueAxios, axios);
