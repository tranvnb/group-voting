import Vuex from 'vuex';
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
// import createLogger from '../../../src/plugins/logger'

export interface IRootState {
  count: number;
}
export default createStore<IRootState>({
  modules: {},
  strict: process.env.NODE_ENV !== 'production',
});

export const key: InjectionKey<Store<IRootState>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}
