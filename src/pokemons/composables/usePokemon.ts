import { useQuery } from '@tanstack/vue-query'
import { getPokemonById } from '../helpers/get-pokemon-by-id'

export const usePokemon = (id: string) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonById(id)
  })

  return {
    // Properties
    pokemon: data,
    isLoading,
    isError,
    error
  }
}
