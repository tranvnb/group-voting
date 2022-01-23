<template>
  <h3 v-for="index in occurences" :key="index">{{ msg }}</h3>
  <UpVote v-for="index in occurences" :key="index"></UpVote>
</template>
<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import UpVote from '../components/UpVote.vue';

const name = 'VerticalGroup';

interface Props {
  msg: string;
  occurences: number;
  labels?: string[];
}

withDefaults(defineProps<Props>(), {
  msg: 'hello',
  occurences: 10,
  labels: () => ['one', 'two'],
});
</script>
