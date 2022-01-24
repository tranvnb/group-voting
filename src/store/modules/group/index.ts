
import {ActionContext, Module} from 'vuex'
import { IRootState } from '../..';
import vote, { IVoteState } from '../vote';
import { GROUP } from './constants';


export interface IGroupState {
  votes: IVoteState[]
}

const groupList: IGroupState[] = [
  {votes: [{isUp: false}]},
  {votes: []},
  {votes:[]}
];


const group: Module<IGroupState[], IRootState> = {
  namespaced: true,
  state: groupList,
  getters: {
    [GROUP.GETTER_GET_LIST_GROUP]: (state): IGroupState[] => {
      console.log("get in [GROUP.GETTER_GET_LIST_GROUP]")
      return state;
    },
    [GROUP.GETTER_GET_TOTAL_GROUP]: (state): number => {
      console.log("get in [GROUP.GETTER_GET_TOTAL_GROUP]")
      return state.length
    },
    [GROUP.GETTER_GET_GROUP_STATE]: (state) => (gId: number): boolean => {
      const vote = state[gId].votes[0];
      if (vote === undefined) {
        return false;
      }
      return vote.isUp;
    }
  },
  actions: {
    [GROUP.ACTION_ADD_VOTE_TO_GROUP]: (context: ActionContext<IGroupState[], IRootState>, payload: {groupId: number, isUpVote: boolean}): void => {
      // side effect here
      context.commit(GROUP.MUTATION_ADD_VOTE, payload);
    },
    [GROUP.ACTION_CHANGE_GROUP_VOTE]: (context: ActionContext<IGroupState[], IRootState>, payload: {groupId: number, isUpVote: boolean}): void => {
      //put side effects here , request API....
      context.commit(GROUP.MUTATION_UPDATE_GROUP_VOTE, payload);
    }
  },
  mutations: {
    [GROUP.MUTATION_ADD_VOTE]: (state: IGroupState[], payload: {groupId: number, isUpVote: boolean}) => {
      debugger;
      const newVote: IVoteState = {isUp: payload.isUpVote};
      state[payload.groupId].votes.push(newVote);
    },
    [GROUP.MUTATION_UPDATE_GROUP_VOTE]: (state: IGroupState[], payload: {groupId: number, isUpVote: boolean}): void => {
      debugger;
      state[payload.groupId].votes.forEach(v => v.isUp = payload.isUpVote);
    },
  }
};

export default group;
