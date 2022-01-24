<template>
  <button class=".button" @click="addNewVote(groupId)"></button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ groupId: number }>();

const addNewVote = (gId: number) => {
  console.log(gId);
};
</script>

<style scoped>
.button {
  background-color: #b3b3b3;
  color: #343a40;
}
</style>
