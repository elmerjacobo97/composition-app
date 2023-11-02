import { computed } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import { useQuery } from '@tanstack/vue-query'

export const usePokemons = () => {
  const {
    isLoading,
    isError,
    data: pokemons,
    error
  } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons
  })
  return {
    // Properties
    pokemons,
    isLoading,
    isError,
    error,

    // Methods or Computed
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
