import { Component, For } from "solid-js";
import { pokemonStore } from "./pokemon.store";

const App: Component = () => {
  return (
    <div class="lg flex flex-col justify-items-center items-center my-5 mx-10">
      <h2 class="text-2xl font-bold text-center">Solid JS Primitives</h2>
      <div class="flex w-1/2 space-x-10 my-10">
        <input
          type="text"
          class="w-2/3 px-5 h-12 border-4 rounded-md border-indigo-400"
          placeholder="Search Pokemon"
        />
        <input
          type="text"
          class="w-1/3 px-5 h-12 border-4 rounded-md border-indigo-400"
          placeholder="Set Threshold"
        />
      </div>

      <div class="md w-1/2  p-10 rounded-md bg-indigo-100 ">
        <table class="w-full table-fixed">
          <thead>
            <tr>
              <th class="px-4 text-center font-bold text-xl text-indigo-400 py-2 w-1/2">
                Name
              </th>
              <th class="px-4 text-center font-bold text-xl text-indigo-400  py-2 w-1/2">
                Abilities
              </th>
              <th class="px-4 text-center font-bold text-xl text-indigo-400  py-2 w-1/4">
                Height
              </th>
              <th class="px-4 text-center font-bold text-xl text-indigo-400  py-2 w-1/4">
                Power
              </th>
            </tr>
          </thead>
          <tbody>
            <For each={pokemonStore.pokemon}>
              {(pokemon) => (
                <tr class="text-indigo-400">
                  <td class="p-5 capitalize border-2 border-indigo-300">
                    {pokemon.name}
                  </td>
                  <td class="p-5 border-2 border-indigo-300">
                    <For each={pokemon.abilities}>
                      {(ability: string) => <span>{`${ability} `}</span>}
                    </For>
                  </td>
                  <td class="p-5 border-2 border-indigo-300">
                    {pokemon.height}
                  </td>
                  <td class="p-5 border-2 text-indigo-900 border-indigo-300">
                    {pokemon.power}
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
