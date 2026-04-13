<script setup lang="ts">
import StartGame from '../components/StartGame.vue'
import PokemonSelection from '../components/PokemonSelection.vue'
</script>

<template>
  <main class="home">
    <section class="left">
      <StartGame />
    </section>

    <section class="right">
      <PokemonSelection />
    </section>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  height: 100vh;
  width: 100%;
}

.left,
.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.left,
.right {
  min-width: 0;
}
</style>
