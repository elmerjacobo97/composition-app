<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Pokemon } from '../interfaces';

interface Props {
  pokemon: Pokemon
}

const props = defineProps<Props>()

const router = useRouter()

const goTo = () => {
  router.push({
    name: 'pokemon-by-id',
    params: {
      id: props.pokemon.id
    }
  })
}

</script>

<template>
  <div class="pokemon-card" @click="goTo">
    <div class="image-container">
      <img :src="pokemon.front_sprite" :alt="pokemon.name" />
    </div>
    <div class="info">
      <h2>{{ pokemon.name }}</h2>
      <p>ID: {{ pokemon.id }}</p>
    </div>
  </div>
</template>

<style scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c2c2c;
  color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  max-width: 300px;
  margin: auto;
  cursor: pointer;
}

.pokemon-card:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

.image-container {
  width: 100%;
  background-color: #1a1a1a;
}

.image-container img {
  width: 100%;
  height: auto;
  padding: 20px;
}

.info {
  padding: 20px;
  width: 100%;
}

.info h2 {
  margin: 10px 0;
  color: #ffffff;
  font-size: 1.2em;
}

.info p {
  color: #cccccc;
  font-size: 1em;
  margin-bottom: 0;
}

@media (min-width: 600px) {
  .pokemon-card {
    width: calc(50% - 20px);
  }
}

@media (min-width: 900px) {
  .pokemon-card {
    width: calc(33.333% - 20px);
  }
}
</style>
