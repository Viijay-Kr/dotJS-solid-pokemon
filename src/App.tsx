import {
  Component,
  createMemo,
  createResource,
  createSignal,
  For,
  Show,
} from "solid-js";
import { getPokemons, Pokemon } from "./getPokemon";

const OFFSET = 10;
const App: Component = () => {
  const [search, setSearch] = createSignal("");
  const [offset, setOffSet] = createSignal(0);
  const [threshold, setThreshold] = createSignal(0);

  const [pokemons, { refetch }] = createResource<Pokemon[]>(
    async () => {
      return await getPokemons(offset());
    },
    {
      initialValue: [],
    }
  );

  const power = createMemo(() =>
    pokemons().reduce<number[]>(
      (acc, p) => [...acc, p.height * threshold() || 0],
      []
    )
  );

  const onLoadMore = () => {
    setOffSet(offset() + OFFSET);
    refetch();
  };

  return (
    <div class="lg flex flex-col justify-items-center items-center my-5 mx-10">
      <h2 class="text-2xl font-bold text-center">Solid JS Primitives</h2>
      <div class="flex w-1/2 space-x-10 my-10">
        <input
          type="text"
          class="w-2/3 px-5 h-12 border-4 rounded-md border-indigo-400"
          placeholder="Search Pokemon"
          onInput={(evt) => setSearch(evt.currentTarget.value)}
        />
        <input
          type="number"
          class="w-1/3 px-5 h-12 border-4 rounded-md border-indigo-400"
          placeholder="Power Threshold"
          onInput={(evt) => setThreshold(parseInt(evt.currentTarget.value, 10))}
        />
      </div>

      <div class="md w-1/2  p-5 rounded-md bg-indigo-100 ">
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
            <For each={pokemons()}>
              {(pokemon, index) => (
                <Show
                  when={pokemon.name
                    .toLowerCase()
                    .includes(search().toLocaleLowerCase())}
                >
                  <tr class="text-indigo-400">
                    <td class="p-5 capitalize border-2 border-indigo-300">
                      {pokemon.name}
                    </td>
                    <td class="p-5 border-2 border-indigo-300">
                      <For each={pokemon.abilities}>
                        {({
                          ability: { name },
                        }: {
                          ability: { name: string };
                        }) => <span>{`${name} `}</span>}
                      </For>
                    </td>
                    <td class="p-5 border-2 border-indigo-300">
                      {pokemon.height}
                    </td>
                    <td class="p-5 border-2 text-indigo-900 border-indigo-300">
                      {power()[index()]}
                    </td>
                  </tr>
                </Show>
              )}
            </For>
          </tbody>
        </table>
        <button
          onClick={onLoadMore}
          class="bg-indigo-500 hover:bg-blue-500 text-white p-2 font-bold rounded mt-5"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default App;
