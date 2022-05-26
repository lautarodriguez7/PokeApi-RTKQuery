import { useGetPokemonByNameQuery } from "../../redux/apis/pokeApi";

export const PokemonsID = ({ name }) => {
  const { data, error, isLoading, isFetching, refetch } =
    useGetPokemonByNameQuery(name);
  return (
    <div style={{ float: "left", textAlign: "center" }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="Poke-select">
          <h3>{data.species.name}</h3>
          <div>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
            <img src={data.sprites.back_shiny} alt={data.species.name} />
            <hr />
            <span>
              Id: <b>{data.id}</b>
            </span>
            <ul>
              <li>hola</li>
            </ul>
          </div>
          <div>
            <button onClick={refetch} disabled={isFetching}>
              {isFetching ? "Fetching..." : "Refetch"}
            </button>
          </div>
        </div>
      ) : (
        "No Data"
      )}
    </div>
  );
};
