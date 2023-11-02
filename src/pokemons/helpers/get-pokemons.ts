import axios from 'axios'
import pokemonApi from '../api/pokemonApi'
import type { Pokemon, PokemonListResponse, PokemonResponse } from '../interfaces'
// import { sleep } from './sleep'

export const getPokemons = async (): Promise<Pokemon[]> => {
  // await sleep(2)

  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')

  const pokemonPromises: Promise<Pokemon>[] = []

  // Iterando sobre el listado de 45 pokemons
  for (const { url } of data.results) {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        front_sprite: data.sprites.front_default
      }
    })
    pokemonPromises.push(pokemonPromise)
  }

  // Return all pokemons
  return await Promise.all(pokemonPromises)
}
