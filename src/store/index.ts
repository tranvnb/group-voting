// import { InjectionKey } from 'vue';
import { createStore } from 'vuex';
import group, { IGroupState } from './modules/group';
import vote, { IVoteState } from './modules/vote';
// import createLogger from '../../../src/plugins/logger'

export interface IRootState {
  group: IGroupState;
  vote: IVoteState;
}
export default createStore<IRootState>({
  modules: {
    group,
    vote
  },
  strict: process.env.NODE_ENV !== 'production',
});

// export const key: InjectionKey<Store<IRootState>> = Symbol();

// export function useStore() {
//   return baseUseStore(key);
// }
