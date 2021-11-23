import { createStore } from "solid-js/store";
interface Pokemon {
  [index: string]: any;
}

interface PokemonStore {
  pokemon: Pokemon[];
}

export const [pokemonStore, setPokemonStore] = createStore<PokemonStore>({
  pokemon: [
    {
      name: "ditto",
      height: 5,
      abilities: ["imposter", "overgrow"],
      power: 0,
    },
    {
      name: "bulbassor",
      height: 15,
      abilities: ["imposter", "overgrow"],
      power: 0,
    },
    {
      name: "pikachu",
      height: 25,
      abilities: ["imposter", "overgrow"],
      power: 0,
    },
    {
      name: "charmelon",
      height: 45,
      abilities: ["imposter", "overgrow"],
      power: 0,
    },
    {
      name: "hybusour",
      height: 35,
      abilities: ["imposter", "overgrow"],
      power: 0,
    },
  ],
});
