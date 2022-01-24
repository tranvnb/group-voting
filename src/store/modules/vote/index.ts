
import {Module} from 'vuex'
import { IRootState } from '../..';

// export enum VOTE {
//   MUTATION_UPDATE_VOTE = 'MUTATION_UPDATE_VOTE'
// }

export interface IVoteState {
  isUp: boolean
}

const defautlState: IVoteState = {
  isUp: false
}

const vote: Module<IVoteState, IRootState> = {
  namespaced: true,
  state: defautlState,
  getters: {},
  actions: {},
  mutations: {
    // MUTATION_UPDATE_VOTE: function(state: ): void {

    // }
  }
};

export default vote;
