<template>
  <div
    class="vote-btn"
    :class="{ selected: isSelected, 'not-selected': !isSelected }"
    @click="$emit('change-vote-state', !isSelected)"
  >
    <b-icon-arrow-up-short class="arrow"></b-icon-arrow-up-short>
  </div>
</template>

<script lang="ts">
export const CHANGE_VOTE_STATE = 'change-vote-state';
</script>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';
import { BIconArrowUpShort } from 'bootstrap-icons-vue';

withDefaults(defineProps<{ isSelected: boolean }>(), {
  isSelected: false,
});

defineEmits([CHANGE_VOTE_STATE]);
</script>

<style scoped lang="scss">
.vote-btn {
  display: block;
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
}
.arrow {
  width: 100%;
  height: 100%;
  font-weight: bold;
}
.selected {
  background-color: #e5e8fd;
  color: #253cf2;
}
.not-selected {
  background-color: #f4f6f8;
  color: #343a40;
}
</style>
