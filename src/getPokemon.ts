import { createSignal } from "solid-js";

export interface Pokemon {
  [index: string]: any;
}

let pokemonsCache: Pokemon[] = [];

export const getPokemons = async (offset: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
  );
  const data: { results: Pokemon[] } = await response.json();
  const pokemons = await Promise.all(
    data.results.map(async (pokemon: any) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    })
  );
  pokemonsCache = [...pokemonsCache, ...pokemons];
  return pokemonsCache;
};
