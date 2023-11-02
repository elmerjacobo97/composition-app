<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';
import PokemonCardListVue from '../components/PokemonCardList.vue';


// const data = await getPokemons();
// const pokemons = ref<Pokemon[]>(data);
// getPokemons().then((data) => pokemons.value = data);


// const { isPending, isFetching, isLoading, isError, data: pokemons, error } = useQuery({
//   queryKey: ['pokemons'],
//   queryFn: getPokemons,
// })

// const count = computed(() => pokemons.value?.length ?? 0);


const { pokemons, isLoading, count, isError, error } = usePokemons();

</script>

<template>
  <h1 v-if="isLoading">loading</h1>
  <div v-else-if="isError">
    <h1>{{ error }}</h1>
  </div>
  <div v-else>
    <PokemonCardListVue :pokemons="pokemons || []" :count="count" />
  </div>
</template>
