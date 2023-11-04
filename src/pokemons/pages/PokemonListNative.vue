<script setup lang="ts">
import PokemonCardListVue from '../components/PokemonCardList.vue';
import store from '@/store/store';
import { useQuery } from '@tanstack/vue-query';
import { getPokemons } from '../helpers/get-pokemons';

useQuery({
  queryKey: ['pokemons'],
  queryFn: getPokemons,
  select(data) {
    // console.log('DATA', data)
    store.loadedPokemons(data);
  },

})

</script>

<template>
  <h1 v-if="store.pokemons.isLoading">loading</h1>
  <div v-else-if="store.pokemons.hasError">
    <h1>{{ store.pokemons.errorMessage }}</h1>
  </div>
  <div v-else>
    <PokemonCardListVue :pokemons="store.pokemons.list" :count="store.pokemons.count" />
  </div>
</template>
