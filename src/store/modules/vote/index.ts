import { Module } from 'vuex';
import { IRootState } from '../..';

export interface IVoteState {
  isUp: boolean;
}

const defautlState: IVoteState = {
  isUp: false,
};

const vote: Module<IVoteState, IRootState> = {
  namespaced: true,
  state: defautlState,
  getters: {},
  actions: {},
  mutations: {},
};

export default vote;
