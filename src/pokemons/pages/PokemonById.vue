<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';

const route = useRoute();
const { id } = route.params;

const { pokemon, isError, isLoading, error } = usePokemon(id.toString());
</script>

<template>
  <div v-if="isLoading" class="pokemon-card loading">
    Cargando...
  </div>
  <div v-else-if="isError" class="pokemon-card error">
    <h1>{{ error }}</h1>
  </div>
  <div v-else class="pokemon-card">
    <h2>{{ `#${pokemon?.id} ${pokemon?.name}` }}</h2>
    <img :src="pokemon?.front_sprite" :alt="pokemon?.name" />
  </div>
</template>

<style scoped>
.pokemon-card {
  background-color: #2a2b2e;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  transition: transform 0.2s;
}

.pokemon-card:hover {
  transform: scale(1.05);
}

.pokemon-card.loading {
  font-size: 20px;
}

.pokemon-card.error {
  background-color: #ff6b6b;
}

img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
