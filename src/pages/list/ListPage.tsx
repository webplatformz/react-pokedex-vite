import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../api/fetcher";
import { PokemonResultDto } from "../../api/pokeApi";
import { PokeList } from "../../components/poke-list/PokeList";

function ListPage() {
  const { data, isLoading, isError } = useQuery(["pokemonList"], () =>
    fetcher<PokemonResultDto>("https://pokeapi.co/api/v2/pokemon?limit=1000")
  );

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR while loading data</div>;

  return <PokeList pokemons={data.results} />;
}

export { ListPage };
