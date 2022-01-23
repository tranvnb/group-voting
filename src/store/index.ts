import Vue from 'vue';
import Vuex from 'vuex';
// import createLogger from '../../../src/plugins/logger'

// Vue.use(Vuex)

// const debug: boolean = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {},
  strict: process.env.NODE_ENV !== 'production',
});
