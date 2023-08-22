import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../api/fetcher";
import { PokemonResultDto } from "../../api/pokeApi";
import { PokeList } from "../../components/poke-list/PokeList";
import { useDebouncedSearch } from "./useDebouncedSearch";
import { SearchPanel } from "../../components/search-panel/SearchPanel";

function ListPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: () =>
      fetcher<PokemonResultDto>("https://pokeapi.co/api/v2/pokemon"),
  });

  const { searchTerm, setSearchTerm, debouncedSearchTerm } =
    useDebouncedSearch("");

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR while loading data</div>;

  return (
    <>
      <SearchPanel searchTerm={searchTerm} onSearchChanged={setSearchTerm} />
      <PokeList
        pokemons={(data?.results ?? []).filter((p) =>
          p.name.includes(debouncedSearchTerm)
        )}
      />
    </>
  );
}

export { ListPage };
