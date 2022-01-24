<template>
  <div>
    <b-icon-plus
      class="add-vote-btn"
      @click="$emit('add-new-vote', groupId)"
    ></b-icon-plus>
  </div>
</template>

<script lang="ts">
export const ADD_NEW_VOTE = 'add-new-vote';
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { BIconPlus } from 'bootstrap-icons-vue';

defineProps<{ groupId: number }>();

defineEmits([ADD_NEW_VOTE]);
</script>

<style scoped lang="scss">
.button {
  background-color: #b3b3b3;
  color: #343a40;
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
</style>
