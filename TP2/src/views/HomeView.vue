<script setup lang="ts">
import CommencerJeux from "../components/CommencerJeux.vue"
import PokemonSelection from "../components/PokemonSelection.vue"

import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedPokemonsIds = ref<number[]>([]);
const playerName = ref('')

function startGameSubmit(submittedName: string) {
  playerName.value = submittedName;
  if (selectedPokemonsIds.value.length === 0) {
    alert('Veuillez sélectionner au moins un Pokémon')
    return
  } else {
    //alert(selectedPokemonsIds.value + " " + playerName.value)
  }
  router.push({
    name: 'game',
    query: {
      name: playerName.value,
      ids: selectedPokemonsIds.value.join(',')
    }
  })
}
</script>

<template>
  <main class="home">
    <section class="left">
      <CommencerJeux
        @submit="startGameSubmit"
        :disabled="selectedPokemonsIds.length === 0"
      />
    </section>
    <section class="right">
      <!--<PokemonSelection 
        @update:selectedPokemonsIds="selectedPokemonsIds.value = $event"
      />-->
      <PokemonSelection 
        v-model:selectedPokemonsIds="selectedPokemonsIds"
      />
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
