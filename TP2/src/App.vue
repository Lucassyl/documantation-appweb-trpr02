<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue';

</script>

<template>
  <div class="app-wrapper">
    <Navigation />
    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: gray;
}
</style>
