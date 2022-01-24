<template>
  <div v-for="(group, gIndex) in groups" :key="gIndex" class="group">
    <div class="voting-group">
      <UpVote
        v-for="(vote, vIndex) in group.votes"
        :key="vIndex"
        :is-selected="vote.isUp"
        @change-vote-state="toggleGroupVoteState(gIndex, $event)"
      ></UpVote>
    </div>
    <AddVoteButton
      :group-id="gIndex"
      @add-new-vote="addVoteBtnToGroup($event)"
    ></AddVoteButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import UpVote from '../components/UpVote.vue';
import AddVoteButton from '../components/AddVoteButton.vue';
import { useStore } from 'vuex';
import { IGroupState } from '../store/modules/group';
import { IRootState } from '../store';
import { GROUP } from '../store/modules/group/constants';

const store = useStore<IRootState>();

const groups = computed<IGroupState[]>(
  () => store.getters[`${GROUP.NAMESPACED}/${GROUP.GETTER_GET_LIST_GROUP}`]
);

const getGroupState = computed<(groupId: number) => boolean>(
  () => store.getters[`${GROUP.NAMESPACED}/${GROUP.GETTER_GET_GROUP_STATE}`]
);

const addVoteBtnToGroup = (groupId: number) => {
  const isUpVote = getGroupState.value(groupId);
  store.dispatch(`${GROUP.NAMESPACED}/${GROUP.ACTION_ADD_VOTE_TO_GROUP}`, {
    groupId,
    isUpVote,
  });
};

const toggleGroupVoteState = (groupId: number, isUpVote: boolean) => {
  store.dispatch(`${GROUP.NAMESPACED}/${GROUP.ACTION_TOGGLE_GROUP_STATE}`, {
    groupId,
    isUpVote,
  });
};
</script>

<style scoped lang="scss">
.group {
  display: flex;
  flex-direction: row;
  align-items: center;

  & + & {
    margin-top: 20px;
  }
  .voting-group {
    display: flex;
    width: 100%;
    min-height: 80px;
    flex-wrap: wrap;
    border-color: #d7d7d7;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .add-vote-btn {
    width: 50px;
    height: 50px;
    background-color: #f4f6f8;
    color: #343a40;
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    &:hover {
      background-color: #b7b7b7;
    }
  }
}
</style>
