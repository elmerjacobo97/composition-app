<script setup lang="ts">
import type { Pokemon } from '../interfaces';
import PokemonCard from './PokemonCard.vue';

interface Props {
  pokemons: Pokemon[];
  count: number;
}

defineProps<Props>();
</script>

<template>
  <h2 class="title">Pokemon List ({{ count }})</h2>
  <div class="pokemon-container">
    <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #333;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.pokemon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
