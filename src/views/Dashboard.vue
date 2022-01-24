<script setup lang="ts">
import VerticalGroup from '../layouts/VerticalGroup.vue';
</script>

<template>
  <div class="main-content">
    <VerticalGroup msg="this is vertical group layout" />
  </div>
</template>

<style scoped lang="scss">
.main-content {
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  margin: auto;
  border: 1px solid #d7d7d7;
  box-shadow: 1px 1px 20px 1px rgba(159, 159, 159, 0.9);
}
</style>
