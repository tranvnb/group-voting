<template>
  <div v-for="gIndex in votingGroupBtnNum.length" :key="gIndex" class="group">
    <div class="voting-group">
      <UpVote
        v-for="index in votingGroupBtnNum[gIndex - 1]"
        :key="index"
      ></UpVote>
    </div>
    <AddVoteButton
      :group-id="gIndex - 1"
      @add-new-vote="addVoteBtnToGroup($event)"
    ></AddVoteButton>
  </div>
  <div class="group">
    <div class="voting-group">
      <b-icon-plus class="add-voting-group-btn"></b-icon-plus>
    </div>
    <div style="visibility: hidden">
      <b-icon-plus class="add-vote-btn"></b-icon-plus>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref } from 'vue';
import UpVote from '../components/UpVote.vue';
import AddVoteButton from '../components/AddVoteButton.vue';

const props = withDefaults(
  defineProps<{ msg: string; occurences: number[]; labels?: string[] }>(),
  {
    msg: 'hello',
    occurences: () => [1, 1],
    labels: () => ['one', 'two'],
  }
);

const votingGroupBtnNum = ref<number[]>([1, 2]);

const addVoteBtnToGroup = (gIndex: number) => {
  votingGroupBtnNum.value[gIndex]++;
  console.log(votingGroupBtnNum.value);
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
